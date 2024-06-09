import styled from "styled-components";
import Header from "../../components/desktop/home/Header";
import Intro from "../../components/desktop/home/Intro";
import Company from "../../components/desktop/home/Company";
import Service from "../../components/desktop/home/Service";
import Value from "../../components/desktop/home/Value";
import Goal from "../../components/desktop/home/Goal";
import Review from "../../components/desktop/home/Review";
import GoService from "../../components/desktop/home/GoService";
import Footer from "../../components/desktop/common/Footer";
import { useNavigate } from "react-router-dom";

function DHome(){
    const navigate = useNavigate();
    if(window.innerWidth < 1300){
        navigate("/m")
    }
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


export default DHome;