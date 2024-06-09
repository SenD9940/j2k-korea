import styled from "styled-components";
import SERVICE_1_SVG from "../../../images/service1.svg";
import SERVICE_2_SVG from "../../../images/service2.svg";
import SERVICE_3_SVG from "../../../images/service3.svg";
import ServiceWrap from "./ServiceWrap";

function Service(){
    return(
        <Container>
            <div className="inner-mobile">
                <Contents>
                    <Title><ComapnyName><SpanStroke>J2K</SpanStroke>KOREA의 서비스</ComapnyName></Title>
                    <Services>
                        <ServiceWrap serviceImg={SERVICE_1_SVG} title={"IT기반의 DT솔루션"} order={"01"}/>
                        <ServiceWrap serviceImg={SERVICE_2_SVG} title={"상품 중개 및 유통, 마케팅 업무"} order={"02"}/>
                        <ServiceWrap serviceImg={SERVICE_3_SVG} title={"경영 컨설팅 및 시장 조사"} order={"03"}/>
                    </Services>
                </Contents>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 48px;
`

const Contents = styled.div`
    border-radius: 2px;
    background: #F0F1F3;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    padding:10px;
`

const SpanStroke = styled.span`
    color: #111;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    padding-right: 8px;
`

const ComapnyName = styled.span`
    color: #111;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
`

const Services= styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`


export default Service;