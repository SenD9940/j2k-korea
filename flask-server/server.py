from flask import Flask, request, jsonify# Flask
from openai import OpenAI
from konlpy.tag import Okt
from rank_bm25 import BM25Okapi
import pandas as pd
import os

app = Flask(__name__)
### 여기까지 ###
@app.route('/chatbot-common/', methods=["post"])
def chatbot_1():

    client = OpenAI(
        api_key=os.environ.get('CHAT_BOT_API_KEY')
    )

    # 사용자 입력 받기
    user_question = request.json.get("user_question")

    try:
        # 새로운 메시지 히스토리 생성
        message_history = [
            {"role": "user", "content": user_question},
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


@app.route('/chatbot-service/', methods=["post"])
def chatbot_2():
    try:
        
        # 사용자 질문 입력 받기
        user_question = request.json.get("user_question")
        df_pool = pd.read_csv("ChatGPT 업체 POOL_DB_20240523-1_작성중_특징추가_ver1.csv", encoding='UTF-8')
        okt = Okt()

        # 문서 전처리 및 BM25 모델 생성
        corpus = []
        for text in df_pool['특징']:
            nouns = okt.nouns(text)
            corpus.append(nouns)

        df_pool['nouns'] = corpus
        bm25 = BM25Okapi(corpus)

        # 질문에서 명사 추출
        user_nouns = okt.nouns(user_question)

        # BM25 점수 계산
        scores = bm25.get_scores(user_nouns)

        # 유사도가 높은 상위 3개 업체 추출
        top_n = 3
        top_indices = scores.argsort()[-top_n:][::-1]

        results = []
        for idx in top_indices:
            company_name = df_pool.iloc[idx]['업체명']
            specialties = [df_pool.iloc[idx][f'특화{i + 1}'] for i in range(3) if pd.notna(df_pool.iloc[idx][f'특화{i + 1}'])]
            specialties_str = ', '.join(specialties)
            results.append(f"{company_name} (특화: {specialties_str})")

        return_message = "관련한 업체는 다음과 같습니다.\n\n"
        for company in results:
            return_message += company
            return_message += "\n"
        return_message += "\n상담을 원하실 경우, j2kbz01@gmail.com으로 연락 부탁드립니다."
        return return_message

    except Exception as e:
        end_message = "일시적인 오류가 발생했습니다. 새로고침 후 다시 시도해주세요."
        return end_message


if __name__ == "__main__":
    app.run(debug = True)