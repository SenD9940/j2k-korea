import styled from "styled-components";

function Company(){
    return(
        <Conatiner>
            <PartName>COMPANY</PartName>
            <ComapnyName><SpanStroke>J2K</SpanStroke>KOREA는</ComapnyName>
            <Desc>IT 기반의 정보통신업을 중심으로<br/>교육, 전문 경영 컨설팅, 연구 개발, 상품, 유통 등의 고객 맞춤형 서비스를<br/>10년 이상의 전문적인 경험을 활용하여 제공합니다.</Desc>
        </Conatiner>
    )
}

const Conatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 160px;
`

const PartName = styled.span`
    color: #4A1B65;
    font-size: 28px;
    font-weight: 600;
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
    margin-top: 40px;
`

const Desc = styled.div`
    margin-top: 20px;
    color: #111;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
`

export default Company;