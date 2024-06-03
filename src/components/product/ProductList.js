import styled from "styled-components";
import ProductItem from "./ProductItem";
import SERVICE_1_SVG from "../../images/service1.svg";
import SERVICE_2_SVG from "../../images/service2.svg";
import SERVICE_3_SVG from "../../images/service3.svg";
import { Slide } from "react-awesome-reveal";

function ProductList(){
    return(
        <Container>
            <div className="inner">
                <Slide >
                    <ProductItem image={SERVICE_1_SVG} subTitle={"상품 기획 및 유통"} title={"재고 상품 재상품화\n솔루션 & 홈쇼핑 판매"}/>
                </Slide>
                <Slide>
                    <ProductItem image={SERVICE_2_SVG} subTitle={"DT 솔루션"} title={"재고 상품 역경매형\nDT 솔루션"}/>
                </Slide>
                <Slide>
                    <ProductItem image={SERVICE_3_SVG} subTitle={"인공지능 솔루션"} title={"학습자 성향에 따른\n온라인 학습 프로그램"}/>
                </Slide>
                <Slide>
                    <ProductItem image={SERVICE_3_SVG} subTitle={"인공지능 솔루션"} title={"동작 포착형(Motion Detection)\n홈 트레이닝 프로그램"}/>
                </Slide>
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

export default ProductList;