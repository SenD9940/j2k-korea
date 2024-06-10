import styled from "styled-components";

function ProductItem({image, category, subTitle, title, event, discount}){
    return(
        <Container>
            <BackgroundImage src={image} alt="service1"/>
            <Contents>
                <ContentsHeader>
                    <Category>{category}</Category>
                    <OptionWrap>
                        {discount ? <Discount>특가</Discount> : null}
                        {event ? <Event>EVENT</Event> : null}
                    </OptionWrap>
                </ContentsHeader>
                <TitleWrap>
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>
                </TitleWrap>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
    flex-basis: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    box-shadow: 0px 4px 38.1px 0px rgba(0, 0, 0, 0.15);
    gap: 0px;
`

const BackgroundImage = styled.img`
    width: 100%;
    height: 640px;
    overflow: hidden;
    object-fit:cover;
`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 20px;
    flex-grow: 1;
    background: #F8F8F8;
`

const ContentsHeader = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

const OptionWrap = styled.div`
    display: flex;
    gap: 8px;
`

const Event = styled.div`
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    background-color: grey;
    padding: 4px;
`

const Discount = styled.div`
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    background-color: #4A1B65;
    padding: 4px;
`

const Category = styled.div`
    color: #4A1B65;
    font-size: 20px;
    font-weight: 400;
`

const SubTitle = styled.div`
    color: #000;
    font-size: 16px;
    font-weight: 500;
`

const Title = styled.div`
    color: #000;
    font-size: 24px;
    font-weight: 400;
    white-space: pre-line;
`

const TitleWrap = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`

export default ProductItem;