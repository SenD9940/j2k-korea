import styled from "styled-components";

function Goal(){
    return(
        <Container>
            <Title><ComapnyName><SpanStroke>J2K</SpanStroke>KOREA의 목표</ComapnyName></Title>
            <Contents>고객별 수요(needs)를 충족시키면서 서로 만족하여<br/>신뢰하는 관계를 지속적으로 유지하여 서로 함께 나아가는 상생형 비즈니스를 추구합니다.</Contents>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-top: 160px;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
`

const SpanStroke = styled.span`
    color: #111;
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    padding-right: 8px;
`

const ComapnyName = styled.span`
    color: #111;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
`

const Contents = styled.div`
    color: #111;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
`

export default Goal;