import styled from "styled-components";

function GoService(){
    return(
        <Container>
            <Title>최상의 품질로, <SpanStroke>나에게 맞는 고객맞춤형 서비스를 경험해보세요!</SpanStroke></Title>
            <Button>서비스 문의하러 가기</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 140px;
    gap: 48px;
`

const Title = styled.div`
    color: #000;
    font-size: 32px;
    font-weight: 400;
`

const SpanStroke = styled.span`
    color: #4A1B65;
    font-size: 32px;
    font-weight: 600;
`

const Button = styled.button`
    border: none;
    border-radius: 2px;
    background: #4A1B65;
    box-shadow: 0px 1.344px 6.721px 0px rgba(0, 0, 0, 0.10);
    padding: 18px 50px;
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
`

export default GoService;