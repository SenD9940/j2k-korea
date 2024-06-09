import styled from "styled-components";
import INTRO_SVG from "../../../images/intro.svg";

function Intro(){
    return(
        <Container>
            <IntroImg src={INTRO_SVG} alt="intro"/>
            <IntroBackground></IntroBackground>
            <div className="inner-mobile">
                <IntroTitle>최상의 품질로<br/>고객맞춤형 서비스를 제공합니다</IntroTitle>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .inner-mobile{
        position: absolute;
        bottom: 40px;
        z-index: 1;
    }
`

const IntroBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, #000 0%, rgba(114, 114, 114, 0.71) 118.46%);
    z-index: 1;
`

const IntroImg = styled.img`
    width: 100%;
`

const IntroTitle = styled.div`
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
`


export default Intro;