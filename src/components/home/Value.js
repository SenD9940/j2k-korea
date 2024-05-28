import styled from "styled-components";
import ValueItem from "./ValueItem";

function Value(){
    return(
        <Container>
            <Title><ComapnyName><SpanStroke>J2K</SpanStroke>KOREA가 제공하는 가치</ComapnyName></Title>
            <div className="inner">
                <ValueItem title={"최적화된 DT 솔루션"} contents={"각 전문 역량을 바탕으로 한\n맞춤형 DT 솔루션 제공"}/>
                <ValueItem title={"디지털 기반 다양한 제품/서비스 제공"} contents={"데이터베이스, 온라인 정보, 자료 처리 등\nit 제품/서비스 제공"}/>
                <ValueItem title={"경영 전반 컨설팅 및 시장 조사"} contents={"전문 분야에서의 10년 이상 경험 축적한 노하우로\n경영 컨설팅 및 맞춤형 시장 조사"}/>
                <ValueItem title={"다양한 학술/경영 역량 보유"} contents={"전문성 갖춘 다양한 인적 역량을 기반으로\n고품질의 지식서비스 제공"}/>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-top: 120px;
    .inner{
        display: flex;
        justify-content: space-between;
    }
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

export default Value;