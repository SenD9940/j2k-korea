import styled from "styled-components";
import LOGO_BLACK_SVG from "../../../images/logo_black.svg";
import CANCEL_SVG from "../../../images/cancel.svg";
import { useNavigate } from "react-router-dom";
import useScrollLock from "../../../hooks/useScrollLock";

function HeaderContent({onCancelClickHandler, onLogoutClickHandler}){
    const uid = sessionStorage.getItem("uid");
    const navigate = useNavigate()
    const onItemClickHandler = (link) => {
        navigate(link); 
        onCancelClickHandler();
    }
    useScrollLock();
    return(
        <Container>
            <div className="inner-mobile">
                <Header>
                    <Logo src={LOGO_BLACK_SVG} alt="logo_black"/>
                    <ButtonMenu src={CANCEL_SVG} alt="cancel" onClick={onCancelClickHandler}/>
                </Header>
                <Contents>
                    <Item onClick={() => onItemClickHandler("/m")}>COMPANY</Item>
                    <Item onClick={() => onItemClickHandler("/m/product")}>PRODUCT</Item>
                    <Item onClick={() => onItemClickHandler("/m/contact")}>CONTACT US</Item>
                    <Item onClick={() => {uid ? onLogoutClickHandler() : onItemClickHandler("/m/login")}}>{uid ? "LOGOUT" : "LOGIN"}</Item>
                </Contents>
            </div>
        </Container>
    )
}

const Container = styled.div`
    background-color: #FFF;
    z-index: 3;
    position: absolute;
    width: 100vw;
    height: 100vh;
    .inner-mobile{
        display: flex;
        flex-direction: column;
        gap: 48px;
    }
    animation: slideIn 1s forwards;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 12px;
`

const Logo = styled.img`
    width: 120px;
`

const ButtonMenu = styled.img`
`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Item = styled.span`
    color: #555;
    font-size: 16px;
    font-weight: 400;
`

export default HeaderContent;