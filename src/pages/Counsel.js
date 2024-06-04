import styled from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Navigation from "../components/counsel/Navigation";
import Chat from "../components/counsel/Chat";
import { useState } from "react";

function Counsel(){
    const [selectedNav, setSelectedNav] = useState("common");
    const onNavClickHandler = (e) => {
        setSelectedNav(e.target.id);
    }
    return(
        <Container>
            <Header/>
            <Contents>
                <div className="inner">
                    <Navigation selectedNav={selectedNav} onNavClickHandler={onNavClickHandler}/>
                    <Chat selectedNav={selectedNav}/>
                </div>
            </Contents>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Contents = styled.div`
    flex-grow: 1;
    .inner{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 100px;
        width: 100%;
        height: calc(100% - 100px);
    }
`

export default Counsel;