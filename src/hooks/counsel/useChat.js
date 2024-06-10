import { useEffect, useRef, useState } from "react";
import useChatBot from "./useChatBot";

function useChat(selectedNav){
    const scrollRef = useRef();
    const {commonBot, serviceBot} = useChatBot();
    const [commonChatList, setCommonChatList] = useState([{
        user:"bot",
        content:"제품 개발, 생산, 유통, 마케팅 등 궁금한 점을 입력하시면 대답해드려요!"
    }])
    const [serviceChatList, setServiceChatList] = useState([{
        user:"bot",
        content:"궁금한 업체 POOL에 대해 질문해 주세요!"
    }]);
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onSubmitClickHandler = () => {
        if(!input){
            return;
        }
        if(selectedNav === "common"){
            commonChatBotHandler();
        }else if(selectedNav === "service"){
            serviceChatBotHandler();
        }
        setInput("");
    }

    const commonChatBotHandler = async() => {
        setCommonChatList(prev => [...prev, {user:"user", content:input}])
        const result = await commonBot(input)
        setCommonChatList(prev => [...prev, {user:"bot", content:result.data}])
    }

    const serviceChatBotHandler = async() => {
        setServiceChatList(prev => [...prev, {user:"user", content:input}])
        const result = await serviceBot(input);
        setServiceChatList(prev => [...prev, {user:"bot", content:result.data}])
    }

    useEffect(() => {
        scrollToBottom();
    }, [commonChatList, serviceChatList]);
 
    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    };


    return{input, onChange, onSubmitClickHandler, commonChatList, serviceChatList, scrollRef};
}

export default useChat;