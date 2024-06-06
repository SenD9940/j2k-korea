import axios from "axios";
function useChatBot(){
    const url = "https://fbf12.store/chatbot-common";
    const serviceBot = async(question) => {
        return await axios.post(`${url}/chatbot-common/`, {
            "user_question":question
        },
        {
        withCredentials: true // 쿠키 cors 통신 설정
        }).then(response => {
            return response;
        });
    }

    const commonBot = async(question) => {
        return await axios.post(`${url}/chatbot-service/`, {
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