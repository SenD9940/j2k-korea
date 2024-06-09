import styled from "styled-components";
import PartName from "../../components/mobile/common/PartName";
import Form from "../../components/mobile/inquiry/Form";
import Header from "../../components/mobile/common/Header";

function MInquiry(){
    return(
        <Container>
            <Header/>
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
    margin-top: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default MInquiry;