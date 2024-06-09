import axios from "axios";

const instance = axios.create({
    baseURL: "https://j2k.store",
});

function useChatBot(){
    const serviceBot = async(question) => {
        return await instance.post(`/chatbot-service/`, {
            "user_question":question
        },
        {
        withCredentials: true // 쿠키 cors 통신 설정
        }).then(response => {
            return response;
        });
    }

    const commonBot = async(question) => {
        return await instance.post(`/chatbot-common/`, {
            "user_question":question
        },
        {
        withCredentials: true // 쿠키 cors 통신 설정
        }).then(response => {
            return response;
        });
    }

    return {commonBot, serviceBot};
}

export default useChatBot;