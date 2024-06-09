import styled from "styled-components";
import Header from "../../components/mobile/common/Header";
import Footer from "../../components/mobile/common/Footer";
import ID_SVG from "../../images/id.svg";
import PW_SVG from "../../images/pw.svg";
import useLogin from "../../hooks/login/useLogin";
import Modal from "../../components/desktop/common/Modal";

function MLogin(){
    const {onChange, inputs, onLoginClickHandler, isSucceed, onSucceedModalConfirmHandler} = useLogin();
    return(
        <Container>
            <Modal isOpen={isSucceed} onClose={onSucceedModalConfirmHandler} title={"SUCCESS"} content={"로그인에 성공하였습니다"}/>
            <Header />
            <Form >
                <div className="inner-mobile">
                    <Title>Login</Title>
                    <Inputs>
                        <InputWrap>
                            <Input name="id" value={inputs.id} onChange={onChange} placeholder="아이디"/>
                            <InputLogo src={ID_SVG} alt="id"/>
                            </InputWrap>
                        <InputWrap>
                            <Input type="password" name="pw" value={inputs.pw} onChange={onChange} placeholder="비밀번호"/>
                            <InputLogo src={PW_SVG} alt="pw"/>
                        </InputWrap>
                    </Inputs>
                    <Button onClick={onLoginClickHandler}>로그인</Button>
                </div>
            </Form>
            <Footer />
        </Container>
    )
}


const Container = styled.div`
    width: 100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Form = styled.div`
    flex-grow: 1;
    .inner-mobile{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:48px;

    }
`

const Title = styled.div`
    color: #4A1B65;
    font-size: 28px;
    font-weight: 600;
`

const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const InputWrap = styled.div`
    position: relative;
    border-radius: 2px;
    border: 1px solid #C7CCD2;
    width: 100%;
    height: 45px;
`

const Input = styled.input`
    border: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-left: 50px;
    font-size: 14px;
    font-weight: 400;
    ::placeholder{
        color: #999;
    }
`

const InputLogo = styled.img`
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 20px;
    width: 14px;
`

const Button = styled.button`
    display: flex;
    width: 100%;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background: #4A1B65;
    color: #FFF;
    font-size: 16px;
    font-weight: 700;
    border: none;
`

export default MLogin;