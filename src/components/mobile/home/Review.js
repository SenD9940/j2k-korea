import styled from "styled-components";
import ReviewItem from "./ReviewItem";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper/modules';

function Review(){
    return(
        <Container>
            <div className="inner-mobile">
                <TitleWrap>
                    <Title>고객 만족 후기</Title>
                    <Desc>10년 이상의 전문적인 경험을 활용하여 최상의 품질로<br/>고객맞춤형 서비스를 제공합니다.</Desc>
                </TitleWrap>
                <ReviewWrap>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <ReviewItem 
                                title={"저한테 너무 필요한 플랫폼이에요"} 
                                contents={"홈쇼핑 판매를 하고 있는데 재고상품을 재상품화하니 (손해보는 것 없이 남김없이 재고 처리 했습니다.(이 플랫폼 너무 유용하네요!!"} 
                                writer={"[개인] 000 고객님의 이용 후기"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewItem 
                                title={"온라인 학습이 즐거워졌어요"} 
                                contents={"온라인으로는 집중이 잘 안됐었는데 J2K KOREA의 인공지능 솔루션을 통해 학습자 성향에 따른 온라인 학습 집중도 확인 프로그램을 이용하니 (온라인 학습이 더 즐거워졌어요."} 
                                writer={"[개인] 000 고객님의 이용 후기"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewItem 
                                title={"서비스 이용에 만족해요!"} 
                                contents={"시장조사, 경영 컨설팅, 설문조사, 경영 전문 진단 등을 맡겼는데 온라인으로 정보를 받고 사회연구 개발에 집중하니 (매출에도 많은 도움이 되었습니다."} 
                                writer={"[기업] 백팩 파트너 000 후기"}
                            />
                        </SwiperSlide>
                    </Swiper>
                </ReviewWrap>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 48px;
    .inner-mobile{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
        gap: 24px;
        background: linear-gradient(90deg, #8FADBA 0%, #111 50%, #4A1B65 100%);
    }
`

const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`

const Title = styled.div`
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
`

const Desc = styled.div`
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
`

const ReviewWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    .mySwiper {
        height: 100%;
        width: 100%;
    }
    .swiper-container {
        width: 100%;
    }
    .swiper-wrapper {
        align-items: center;
        display: flex;
    }
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide-next{
        z-index: 10;
    }
`

export default Review;
