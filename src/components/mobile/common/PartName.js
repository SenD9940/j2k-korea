import styled from "styled-components";

function PartName(props){
    return(
        <Container>{props.children}</Container>
    )
}

const Container = styled.div`
    color: #4A1B65;
    font-size: 20px;
    font-weight: 600;
`

export default PartName;