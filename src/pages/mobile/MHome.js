import styled from "styled-components";
import Intro from "../../components/mobile/home/Intro";
import Header from "../../components/mobile/home/Header";
import Company from "../../components/mobile/home/Company";
import Service from "../../components/mobile/home/Service";
import Value from "../../components/mobile/home/Value";
import Goal from "../../components/mobile/home/Goal";
import Review from "../../components/mobile/home/Review";
import GoService from "../../components/mobile/home/GoService";
import Footer from "../../components/mobile/common/Footer";

function MHome(){
    return(
        <Container>
            <Header />
            <Intro/>
            <Company/>
            <Service/>
            <Value />
            <Goal />
            <Review />
            <GoService />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
`

export default MHome;