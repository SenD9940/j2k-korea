import { useState } from "react";
import useFirebaseAuth from "../firebase/useFirebaseAuth";
import { useNavigate } from "react-router-dom";
import useCrypto from "../useCrypto";

function useLogin(){
    const navigate = useNavigate();
    const {encrypto} = useCrypto();
    const [isSucceed, setIsSucceed] = useState(false);
    const {login} = useFirebaseAuth();
    const [inputs, setInputs] = useState({
        id:"",
        pw:""
    });

    const onLoginClickHandler = () => {
        login(`${inputs.id}@j2k.com`, inputs.pw).then(res => {
            if(res.uid){
                setIsSucceed(true);
                const uid =  encrypto(res.uid);
                sessionStorage.setItem("uid", uid);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const onSucceedModalConfirmHandler = () => {
        navigate("/board");
        setIsSucceed(false);
    }

    return {onLoginClickHandler, inputs, onChange, isSucceed, onSucceedModalConfirmHandler};
}

export default useLogin;