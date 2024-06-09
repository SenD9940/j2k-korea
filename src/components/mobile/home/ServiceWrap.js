import styled from "styled-components";

function ServiceWrap({serviceImg, order, title}){
    return(
        <Container>
            <ServiceImg src={serviceImg} alt="service"/>
            <ServiceBackground ></ServiceBackground>
            <Contents>
                <Order>{order}</Order>
                <Title>{title}</Title>
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
    z-index: 1;
`

const Order = styled.span`
    color: rgba(255, 255, 255, 0.80);
    font-size: 12px;
    font-weight: 700;
`

const Title = styled.span`
    color: #FFF;
    font-size: 16px;
    font-weight: 700;
`

export default ServiceWrap;