import styled from "styled-components";

function InputText({name, type, value, placeholder, onChange}){
    return(
        <Input name={name} type={type} value={value} placeholder={placeholder} onChange={onChange}/>
    )
}


const Input = styled.input`
    padding: 12px;
    border-radius: 2px;
    border: 1px solid #C7CCD2;
    background: #FFF;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
`

export default InputText;