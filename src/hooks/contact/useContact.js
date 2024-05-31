import { useState } from "react";

function useContact(){
    const [fileList, setFileList] = useState([]);

    const handleChange = (file) => {
        setFileList(prev => [...prev, file]);
    };

    return {fileList, handleChange};
}

export default useContact;