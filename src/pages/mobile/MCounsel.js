import styled from "styled-components";
import Header from "../../components/mobile/common/Header";
import Chat from "../../components/mobile/counsel.js/Chat";

function Counsel(){
    return(
        <Container>
            <Header />
            <Contents>
                <Chat/>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const Contents = styled.div`
    margin-top: 52px;
    flex-grow: 1;
`


export default Counsel;