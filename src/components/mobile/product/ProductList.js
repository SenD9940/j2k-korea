import styled from "styled-components";
import ProductItem from "./ProductItem";
import SERVICE_1_SVG from "../../../images/service1.svg";
import SERVICE_2_SVG from "../../../images/service2.svg";
import SERVICE_3_SVG from "../../../images/service3.svg";
import SOPAL_SVG from "../../../images/sopal.svg";
import { Fade, Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

function ProductList(){
    const navigate = useNavigate();
    return(
        <Container>
            <div className="inner-mobile">
                <Slide >
                    <ProductItem image={SOPAL_SVG} category={"FASHION"} title={"불편함 제로 기능성 남성속옷 쏘팔팬티"} subTitle={"원적외선 방사 세포의 활성화, 재생촉진으로 남성 성기능 질환 완환에 탁월"} event={true} discount={true}/>
                </Slide>
                <Slide >
                    <ProductItem image={SERVICE_1_SVG} category={"SERVICE"} title={"상품 기획 및 유통"} subTitle={"재고 상품 재상품화\n솔루션 & 홈쇼핑 판매"} event={true}/>
                </Slide>
                <Slide>
                    <ProductItem image={SERVICE_2_SVG} category={"SERVICE"} title={"DT 솔루션"} subTitle={"재고 상품 역경매형\nDT 솔루션"} discount={true}/>
                </Slide>
                <Slide>
                    <ProductItem image={SERVICE_3_SVG} category={"SERVICE"} title={"인공지능 솔루션"} subTitle={"학습자 성향에 따른\n온라인 학습 프로그램"} discount={true}/>
                </Slide>
                <Slide>
                    <ProductItem image={SERVICE_3_SVG} category={"SERVICE"} title={"인공지능 솔루션"} subTitle={"동작 포착형(Motion Detection)\n홈 트레이닝 프로그램"} event={true}/>
                </Slide>
                <Fade>
                    <Button onClick={() => navigate("/m/inquiry")}>구매문의하기</Button>
                </Fade>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 48px;
    margin-bottom: 48px;
    .inner-mobile{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

const Button = styled.div`
    background-color: #4A1B65;
    color: white;
    font-size: 16px;
    padding: 12px;
    font-weight: 600;
    text-align: center;
`

export default ProductList;