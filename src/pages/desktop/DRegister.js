import styled from "styled-components";
import Header from "../../components/desktop/common/Header";
import Footer from "../../components/desktop/common/Footer";
import InputText from "../../components/desktop/common/InputText";
import PartName from "../../components/desktop/common/PartName";

function DRegister(){
    return(
        <Container>
            <Header />
            <Contents>
                <PartName>회원가입</PartName>
                <div className="inner">
                    <InputWrap>
                        <InputText placeholder={"이름"}/>
                        <InputText placeholder={"전화번호"}/>
                    </InputWrap>
                    <InputWrap>
                        <InputText placeholder={"아이디"}/>
                        <InputText placeholder={"이메일"}/>
                    </InputWrap>
                    <InputWrap>
                        <InputText type={"password"} placeholder={"비밀번호"}/>
                        <InputText type={"password"} placeholder={"비밀번호 확인"}/>
                    </InputWrap>
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
    margin-top: 160px;
    .inner{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        height: 100%;
    }
`

const InputWrap = styled.div`
    display: flex;
    gap: 20px;
`

const ButtonRegister = styled.button`
    width: 120px;
    padding: 12px;
    align-self: flex-end;
    background-color: #4A1B65;
    border-radius: 2px;
    border: none;
    font-size: 16px;
    color: white;
    font-weight: 700px;
`

export default DRegister;