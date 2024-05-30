import styled from "styled-components";
import Header from "../components/common/Header";
import PartName from "../components/common/PartName";
import ProductList from "../components/product/ProductList";
import Footer from "../components/common/Footer";

function Product(){
    return(
        <Container>
            <Header />
            <Contents>
                <PartName>PRODUCT</PartName>
                <ProductList />
            </Contents>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
`

const Contents = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Product;