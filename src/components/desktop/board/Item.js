import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Item({title, writer, registerAt, id, onComparePasswordHandler}){
    const navigate = useNavigate();
    const date = registerAt.toDate();
    
    const onItemClickHandler = () => {
        const uid = sessionStorage.getItem("uid");
        if(uid){
            navigate("/contact/view", {state:id})
        }else{
            onComparePasswordHandler(id);
        }
    }
    return(
        <Tr>
            <Td onClick={onItemClickHandler}>{title}</Td>
            <Td style={{textAlign:"center"}}>{writer}</Td>
            <Td style={{textAlign:"center"}}>{`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}</Td>
        </Tr>
    )
}

const Tr = styled.tr`
    width: 100%;
    border-bottom: 1px solid #999;
    &:hover{
        color:white;
        background-color: #4A1B65;
    }
`


const Td = styled.td`
    padding: 8px;
`

export default Item;