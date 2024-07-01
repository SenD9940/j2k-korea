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
            <div className="inner">
                <ItemWrap>
                    <ProductItem image={SERVICE_3_SVG} category={"SERVICE"} title={"인공지능 솔루션"} subTitle={"동작 포착형(Motion Detection)\n홈 트레이닝 프로그램"} event={true}/>
                    <ProductItem image={SERVICE_1_SVG} category={"SERVICE"} title={"상품 기획 및 유통"} subTitle={"재고 상품 재상품화\n솔루션 & 홈쇼핑 판매"} event={true}/>
                </ItemWrap>
                <ItemWrap>
                    <ProductItem image={SERVICE_2_SVG} category={"SERVICE"} title={"DT 솔루션"} subTitle={"재고 상품 역경매형\nDT 솔루션"} discount={true}/>
                    <ProductItem image={SERVICE_3_SVG} category={"SERVICE"} title={"인공지능 솔루션"} subTitle={"학습자 성향에 따른\n온라인 학습 프로그램"} discount={true}/>
                </ItemWrap>
                <Fade>
                    <Button onClick={() => navigate("/contact")}>구매문의하기</Button>
                </Fade>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 160px;
    margin-bottom: 160px;
    .inner{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`

const ItemWrap = styled.div`
    display: flex;
    gap: 20px;
`

const Button = styled.div`
    background-color: #4A1B65;
    color: white;
    font-size: 20px;
    padding: 12px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
`


export default ProductList;