import styled from "styled-components";
import Header from "../../components/desktop/common/Header";
import PartName from "../../components/desktop/common/PartName";
import ProductList from "../../components/desktop/product/ProductList";
import Footer from "../../components/desktop/common/Footer";

function DProduct(){
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

export default DProduct;