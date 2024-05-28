import styled from "styled-components";
import SERVICE_1_SVG from "../../images/service1.svg";
import SERVICE_2_SVG from "../../images/service2.svg";
import SERVICE_3_SVG from "../../images/service3.svg";
import ServiceWrap from "./ServiceWrap";
import { Slide } from "react-awesome-reveal";

function Service(){
    return(
        <Container>
            <div className="inner">
                <Contents>
                    <Title><ComapnyName><SpanStroke>J2K</SpanStroke>KOREA의 서비스</ComapnyName></Title>
                    <Services>
                        <Slide><ServiceWrap serviceImg={SERVICE_1_SVG} order={"01"} title={"IT 기반의 DT 솔루션"} desc1={"재고 상품 처리를 위한 DT 솔루션"} desc2={"기존 산업의 신규 O2O 서비스 전환"} desc3={"다양한 지식정보를 IT 기반의\nDIGITAL TRANSFORMATION\n솔루션을 제시"}/></Slide>
                        <Slide><ServiceWrap serviceImg={SERVICE_2_SVG} order={"02"} title={"상품 중개 및 유통, 마케팅 업무"} desc1={"상품 중개, 재고처리 등\n상품 유통과 관련된 전반적 업무 지원"} desc2={"유통(직매입, 도소매 등) 관련 직접 업무, 솔루션 제공 등 맞춤형 지원"} desc3={"마케팅 (SNS, 영상, 사진촬영 등)\n트렌드를 접목한 다양한 마케팅 활동"}/></Slide>
                        <Slide><ServiceWrap serviceImg={SERVICE_3_SVG} order={"03"} title={"경영 컨설팅 및 시장 조사"} desc1={"학위와 전문성을 바탕으로\n10년 이상의 경영학 학술적 역량 보유"} desc2={"컨설팅 및 교육,\n행사 등 다양한 업무 지원"} desc3={"한국 및 해외 시장 조사 진행"}/></Slide>
                    </Services>
                </Contents>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 120px;
`

const Contents = styled.div`
    border-radius: 2px;
    background: #F0F1F3;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    padding: 48px;
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

const Services= styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`


export default Service;