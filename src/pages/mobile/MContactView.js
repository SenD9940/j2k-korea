import styled from "styled-components";
import Header from "../../components/mobile/common/Header";
import Footer from "../../components/mobile/common/Footer";
import { useLocation } from "react-router-dom";
import useContactView from "../../hooks/contact/useContactView";

function MContactView(){
    const id = useLocation().state;
    const {contact} = useContactView(id);
    const getImages = () => {
        if(!contact.file_list.length){
            return null;
        }
        return contact.file_list.map((item, index) => {
            return <Image src={item} key={index}/>
        })
    }
    return(
        <Container>
            <Header />
            <Contents>
                <div className="inner-mobile">
                    <InputWrap>
                        <InputText>{contact.register_at}</InputText>
                        <InputText>{contact.company}</InputText>
                    </InputWrap>
                    <InputText>{contact.tel}</InputText>
                    <InputText>{contact.email}</InputText>
                    <InputText>{contact.title}</InputText>
                    <TextArea>{contact.content}</TextArea>
                    {getImages()}
                </div>
            </Contents>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Contents = styled.div`
    flex-grow: 1;
    margin-top: 84px;
    width: 100%;
    .inner-mobile{
        display: flex;
        flex-direction: column;
        gap: 18px;
        margin-bottom: 48px;
    }
`

const InputWrap = styled.div`
    display: flex;
    gap: 18px;
`

const InputText = styled.div`
    padding: 12px;
    border-radius: 2px;
    border: 1px solid #C7CCD2;
    background: #FFF;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
`

const TextArea = styled.div`
    padding: 12px;
    border-radius: 2px;
    border: 1px solid #C7CCD2;
    background: #FFF;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
`

const Image = styled.img`
`

export default MContactView;