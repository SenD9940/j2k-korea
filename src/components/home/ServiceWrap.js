import styled from "styled-components";

function ServiceWrap({serviceImg, order, title, desc1, desc2, desc3}){
    return(
        <Container>
            <ServiceImg src={serviceImg} alt="service1"/>
            <ServiceBackground ></ServiceBackground>
            <Contents>
                <TitleWrap>
                    <Order>{order}</Order>
                    <Title>{title}</Title>
                </TitleWrap>
                <DescWrap>
                    <Desc>{desc1}</Desc>
                    <Desc>{desc2}</Desc>
                    <Desc>{desc3}</Desc>
                </DescWrap>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
`

const ServiceImg = styled.img`
    width: 100%;
`

const ServiceBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(17, 17, 17, 0.60);
    z-index: 1;
`

const Contents = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 75px;
    z-index: 1;
`

const Order = styled.span`
    color: rgba(255, 255, 255, 0.80);
    font-size: 28px;
    font-weight: 800;
`

const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;
`

const Title = styled.span`
    color: #FFF;
    font-size: 28px;
    font-weight: 600;
`

const DescWrap = styled.div`
    display: flex;
    gap: 75px;
`

const Desc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 140%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid #FFF;
    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    white-space: pre-line;
`

export default ServiceWrap;