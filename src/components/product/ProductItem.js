import styled from "styled-components";

function ProductItem({image, subTitle, title}){
    return(
        <Container>
            <BackgroundImage src={image} alt="service1"/>
            <Background></Background>
            <TitleWrap>
                <SubTitle>{subTitle}</SubTitle>
                <Title>{title}</Title>
            </TitleWrap>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
`

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(17, 17, 17, 0.30);
    z-index: 1;
`

const BackgroundImage = styled.img`
    width: 100%;
`

const SubTitle = styled.div`
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
`

const Title = styled.div`
    color: #FFF;
    font-size: 40px;
    font-weight: 600;
    white-space: pre-line;
`

const TitleWrap = styled.div`
    position: absolute;
    left: 50px;
    bottom: 140px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export default ProductItem;