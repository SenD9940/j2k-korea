import styled from "styled-components";
import Header from "../components/home/Header";
import Intro from "../components/home/Intro";
import Company from "../components/home/Company";
import Service from "../components/home/Service";
import Value from "../components/home/Value";
import Goal from "../components/home/Goal";
import Review from "../components/home/Review";
import GoService from "../components/home/GoService";
import Footer from "../components/common/Footer";

function Home(){
    return(
        <Container>
            <Header/>
            <Intro />
            <Company />
            <Service />
            <Value/>
            <Goal />
            <Review />
            <GoService />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`


export default Home;