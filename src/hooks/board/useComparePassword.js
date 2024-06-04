import { useEffect, useState } from "react";
import useFirestore from "../firebase/useFirestore";
import useCrypto from "../useCrypto";
import { useNavigate } from "react-router-dom";

function useComparePassword(){
    const navigate = useNavigate();
    const {decrypto} = useCrypto();
    const {readFirestoreOneDoc} = useFirestore();
    const [input, setInput] = useState("");
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [id, setId] = useState("");

    const isPasswordMatched = async(id) => {
        const result = readFirestoreOneDoc("Inquiry", id).then(res => {
            if(res.exists()){
                console.log(input, res.data().password);
                if(decrypto(res.data().password) === input){
                    return true;
                }
            }
            return false;
        })
        return result;
    }

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onComparePasswordHandler = (id) => {
        setId(id);
        setShowPasswordModal(true);
    }

    const onConfirmClick = () => {
        isPasswordMatched(id).then(res => {
            if(res){
                navigate("/contact/view", {state:id});
            }else{
                setShowErrorModal(true);
            }
        })
    }
    
    
    return {input, onChange,  showErrorModal, setShowErrorModal, showPasswordModal, setShowPasswordModal, onComparePasswordHandler, onConfirmClick}
}

export default useComparePassword;