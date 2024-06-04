"""
미리 이뤄져야 하는 작업
1. terminal에 pip install konlpy 그리고 pip install rank_bm25 그리고 pip install pandas를 입력하여 라이브러리가 다운로드된 상태로 만들어야 함
2. csv 파일을 어딘가에 저장해두고, 코드 사용 시 불러올 수 있어야 함
3. 아래에 표시해둔 ### 여기서부터 ### 코드 ### 여기까지 ### 부분은 매번 실행되지 않아도 됨
"""

from konlpy.tag import Okt
from rank_bm25 import BM25Okapi
import pandas as pd

### 여기서부터 ###
df_pool = pd.read_csv("ChatGPT 업체 POOL_DB_20240523-1_작성중_특징추가_ver1.csv", encoding='UTF-8')

# 명사 추출기
okt = Okt()

# 문서 전처리 및 BM25 모델 생성
corpus = []
for text in df_pool['특징']:
    nouns = okt.nouns(text)
    corpus.append(nouns)

df_pool['nouns'] = corpus
bm25 = BM25Okapi(corpus)
### 여기까지 ###

# 해당 문구는 챗봇의 시작 부분에만 넣으면 될 것 같습니다. 대화 도중 계속 나오는 문구는 아닙니다!
print("궁금한 업체 POOL에 대해 질문해 주세요!")

def chatbot_2():
    try:
        # 사용자 질문 입력 받기
        user_question = input("")

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
