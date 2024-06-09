import styled from "styled-components";
import Header from "../../components/mobile/common/Header";
import PartName from "../../components/mobile/common/PartName";
import ProductList from "../../components/mobile/product/ProductList";
import Footer from "../../components/mobile/common/Footer";

function MProduct(){
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
    margin-top: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default MProduct;