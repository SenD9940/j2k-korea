import styled from "styled-components";
import Header from "../components/common/Header"
import PartName from "../components/common/PartName";
import Form from "../components/contact/Form";

function Contact(){
    return(
        <Container>
            <Header />
            <Contents>
                <PartName>문의하기</PartName>
                <Form />
            </Contents>
        </Container>
    )
}

const Container = styled.div`
`

const Contents = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default Contact;