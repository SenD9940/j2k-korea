import styled from "styled-components";
import SUBMIT_SVG from "../../../images/submit.svg";
import useChat from "../../../hooks/counsel/useChat";
import { useLocation } from "react-router-dom";

function Chat({selectedNav}){
    const selectedBot = useLocation().state;
    console.log(selectedBot);
    const {input, onChange, onSubmitClickHandler, commonChatList, serviceChatList, scrollRef} = useChat(selectedBot);

    const getCommonChatList = () => {
        return commonChatList.map((item, index) => {
            if(item.user === "bot"){
                return <Bot key={index}>{item.content}</Bot>
            }else{
                return <User key={index}>{item.content}</User>
            }
        })
    }

    const getServiceChatList = () => {
        return serviceChatList.map((item, index) => {
            if(item.user === "bot"){
                return <Bot key={index}>{item.content}</Bot>
            }else{
                return <User key={index}>{item.content}</User>
            }
        })
    }
    return(
        <Container>
            <Contents>
                <ChatList ref={scrollRef}>
                    {selectedBot === "common" ? getCommonChatList() : getServiceChatList()}
                </ChatList>
            </Contents>
            <SubmitWrap>
                <Input value={input} onChange={onChange} placeholder="질문을 입력해 주세요"/>
                <ButtonSubmit src={SUBMIT_SVG} alt="submit" onClick={onSubmitClickHandler}/>
            </SubmitWrap>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const Contents = styled.div`
    display: flex;
    flex-grow: 1;
    background-color: #F4F4F4;
    position: relative;
`

const ChatList = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    padding: 10px;
    height: 100%;
`

const SubmitWrap = styled.div`
    padding: 12px 20px;
    border-radius: 2px;
    background-color: white;
    display: flex;
    gap: 4px;
`

const Input = styled.input`
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color:black;
    font-size: 16px;
    &::placeholder{
        color: #555;
    }
`

const ButtonSubmit = styled.img`
`

const Bot = styled.span`
    padding: 10px;
    border-radius: 2px;
    background: #8E8E8E;
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    align-self: baseline;
    white-space: pre-wrap;
`

const User = styled.span`
    padding: 10px;
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    border-radius: 2px;
    background: #9762B6;
    align-self: flex-end;
`

export default Chat;