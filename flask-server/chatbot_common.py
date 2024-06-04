'''
미리 이뤄져야 하는 작업
1. terminal에 pip install openai 입력하여 라이브러리가 다운로드된 상태로 만들어야 함
2. OPENAI_API_KEY라는 이름으로 환경 변수를 설정하고 openai의 키를 저장해두어야 함
'''

from openai import OpenAI
import os

# 해당 문구는 챗봇의 시작 부분에만 넣으면 될 것 같습니다. 대화 도중 계속 나오는 문구는 아닙니다!
print("제품 개발, 생산, 유통, 마케팅 등 궁금한 점을 입력하시면 대답해드려요!")
def chatbot_1():

    client = OpenAI(
        api_key=os.environ.get('CHAT_BOT_API_KEY')
    )

    # 사용자 입력 받기
    user_input = input("")

    try:
        # 새로운 메시지 히스토리 생성
        message_history = [
            {"role": "user", "content": user_input},
            {"role": "system", "content": "항상 명확하고 간결하며 완성된 형태의 답변을 작성해줘."}
        ]

        # OpenAI API 호출
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=message_history,
            temperature=0.5,
            max_tokens=256,
        )

        # 생성된 응답 추출
        assistant_message = response.choices[0].message.content
        return assistant_message

    except Exception as e:
        error_message = "일시적인 오류가 발생했습니다. 새로고침 후 다시 시도해주세요."
        return error_message