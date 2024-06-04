import { useEffect, useState } from "react";
import useFirestore from "../firebase/useFirestore";
import useCrypto from "../useCrypto";

function useContactView(id){
    const {decrypto} = useCrypto();
    const [contact, setContact] = useState({
        title:"",
        company:"",
        email:"",
        register_at:"",
        tel:"",
        content:"",
        file_list:[]
    });
    const {readFirestoreOneDoc} = useFirestore();

    useEffect(() => {
        getContact();
    }, [])

    const getContact = async() => {
        const contact = await readFirestoreOneDoc("Inquiry", id).then(res => {
            if(res.exists()){
                const data = res.data();
                const email = decrypto(data.email);
                const tel = decrypto(data.tel);
                const date = data.register_at.toDate();
                const register_at = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
                return {
                    title:data.title,
                    company:data.company,
                    email:email,
                    register_at:register_at,
                    tel:tel,
                    content:data.content,
                    file_list:data.file_list
                }
            }
        })
        setContact(contact);
    }

    return{contact}
}

export default useContactView;
