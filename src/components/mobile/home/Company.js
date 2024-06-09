import styled from "styled-components";
import LOGO_BLACK_SVG from "../../../images/logo_black.svg";

function Company(){
    return(
        <Container>
            <div className="inner-mobile">
                <Title><Logo src={LOGO_BLACK_SVG} alt="logo_black"/>는</Title>
                <Content>
                    IT 기반의 정보통신업을 중심으로<br/>교육, 전문 경영 컨설팅, 연구 개발, 상품, 유통 등의 고객 맞춤형 서비스를<br/>10년 이상의 전문적인 경험을 활용하여 제공합니다.
                </Content>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 48px;
    width: 100%;
    .inner-mobile{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`

const Logo = styled.img`
    width: 100px;
`

const Title = styled.div`
    display: flex;
    align-items: center;
`

const Content = styled.div`
    color: #555;
    text-align: center;
    font-size: 12px;
    font-weight: 300;
`

export default Company;