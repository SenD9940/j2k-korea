import axios from "axios";
function useChatBot(){

    const serviceBot = async(question) => {
        return await axios.post("/service", {
            "user_question":question
        },
        {
        withCredentials: true // 쿠키 cors 통신 설정
        }).then(response => {
            return response;
        });
    }

    const commonBot = async(question) => {
        return await axios.post("/common", {
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