import { useState } from "react";
import useFirestore from "../firebase/useFirestore";
import useStorage from "../firebase/useStorage";
import { v4 as uuidv4 } from 'uuid';
import useCrypto from "../useCrypto";
import useFirebaseAuth from "../firebase/useFirebaseAuth";
import { useNavigate } from "react-router-dom";

function useContact(){
    const navigate = useNavigate();
    const {encrypto} = useCrypto();
    const [showSucceedModal, setShowSucceedModal] = useState(false);
    const {anymousLogin} = useFirebaseAuth();
    const {uploadStorage} = useStorage();
    const { writeFirestore } = useFirestore();
    const [targetFileName, setTargetFileName] = useState("");
    const [progress, setProgress] = useState(0);
    const [showLoading, setShowLoading] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [inputs, setInputs] = useState({
        password:"",
        company:"",
        email:"",
        content:"",
        title:"",
        tel:""
    })

    const handleChange = (file) => {
        setFileList(prev => [...prev, file]);
    };

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const onSubmitClick = async() => {
        const login_state = await anymousLogin();
        if(!login_state){
            return;
        }
        const document_id = uuidv4();
        setShowLoading(true);
        const file_url_list = await uploadFileList(document_id);
        setShowLoading(false);
        const encrypted_password = encrypto(inputs.password);
        const encrypted_tel = encrypto(inputs.tel);
        const encrypted_email = encrypto(inputs.email);
        const data = {
            file_list:file_url_list,
            password:encrypted_password,
            email:encrypted_email,
            tel:encrypted_tel,
            title:inputs.title,
            company:inputs.company,
            content:inputs.content,
            register_at:new Date()
            
        }
        console.log(data);
        writeFirestore("/Inquiry", document_id, data).then(res => {
            if(res){
                setShowSucceedModal(true);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const uploadFileList = async(document_id) => {
        const file_url_list = [];
        for(let i = 0; i < fileList.length; i++){
            setTargetFileName(fileList[i].name)
            const url = await uploadStorage(document_id, fileList[i], setProgress).then(res => {
                return res;
            })
            file_url_list.push(url);
        }
        return file_url_list;
    }

    const onSucceedModalConfirmHandler = () => {
        setShowSucceedModal(false);
        navigate("/contact")
    }

    return {fileList, handleChange, inputs, onChange, onSubmitClick, targetFileName, progress, showLoading, showSucceedModal, onSucceedModalConfirmHandler};
}

export default useContact;