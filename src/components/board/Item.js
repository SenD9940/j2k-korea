import styled from "styled-components";

function Item({title, writer, registerAt}){
    const date = registerAt.toDate();
    return(
        <Tr>
            <Td >{title}</Td>
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