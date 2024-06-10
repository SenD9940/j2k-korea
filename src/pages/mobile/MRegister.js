import styled from "styled-components";
import Header from "../../components/mobile/common/Header";
import Footer from "../../components/mobile/common/Footer";
import InputText from "../../components/desktop/common/InputText";
import PartName from "../../components/mobile/common/PartName";

function MRegister(){
    return(
        <Container>
            <Header />
            <Contents>
                <PartName>회원가입</PartName>
                <div className="inner-mobile">
                    <InputText placeholder={"이름"}/>
                    <InputText placeholder={"전화번호"}/>
                    <InputText placeholder={"아이디"}/>
                    <InputText placeholder={"이메일"}/>
                    <InputText type={"password"} placeholder={"비밀번호"}/>
                    <InputText type={"password"} placeholder={"비밀번호 확인"}/>
                    <ButtonRegister>회원가입</ButtonRegister>
                </div>
            </Contents>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 80px;
`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    flex-grow: 1;
    margin-top: 84px;
    .inner-mobile{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        height: 100%;
    }
`
const ButtonRegister = styled.button`
    width: 120px;
    padding: 12px;
    align-self: center;
    background-color: #4A1B65;
    border-radius: 2px;
    border: none;
    font-size: 16px;
    color: white;
    font-weight: 700px;
`

export default MRegister;