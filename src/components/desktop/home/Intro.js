import styled from "styled-components";
import INTRO_SVG from "../../../images/intro.svg";
function Intro(){
    return(
        <Container>
            <IntroImg src={INTRO_SVG} alt="intro"/>
            <IntroBackground></IntroBackground>
            <div className="inner">
                <IntroTitle>최상의 품질로<br/>고객맞춤형 서비스를 제공합니다</IntroTitle>
                <IntroSubTitle>IT 기반의 정보통신업을 중심으로 교육, 전문 경영 컨설팅, 연구 개발, <br/>상품, 유통 등 다양한 영역에서 10년 이상의 전문적인 경험을 활용합니다.</IntroSubTitle>
            </div>
        </Container>
    )

}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .inner{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 48px;
        z-index: 2;
    }
`

const IntroBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, #111 0%, rgba(229, 229, 229, 0.00) 167.31%);
    z-index: 1;
`

const IntroImg = styled.img`
    width: 100%;
`

const IntroTitle = styled.div`
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
`

const IntroSubTitle = styled.div`
    color: #FFF;
    font-size: 20px;
    font-weight: 400;
    line-height: 160%;
`

export default Intro;