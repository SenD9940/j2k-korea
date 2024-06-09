import styled from "styled-components";
import LOGO_WHITE_SVG from "../../../images/logo_white.svg";
import LOGO_BLACK_SVG from "../../../images/logo_black.svg";
import BURGER_SVG from "../../../images/buger.svg";
import BURGER_GREY_SVG from "../../../images/burger_grey.svg";
import useHeader from "../../../hooks/common/useHeader";
import HeaderContent from "../common/HeaderContent";

function Header(){
    const {toggle, onBurgerClickHandler, onCancelClickHandler, isShowContents} = useHeader();
    return(
        <Container toggle={toggle}>
            {isShowContents ? <HeaderContent onCancelClickHandler={onCancelClickHandler}/> : null}
            <div className="inner-mobile">
                <Logo src={toggle === "true" ? LOGO_BLACK_SVG : LOGO_WHITE_SVG} alt="logo_white"/>
                <ButtonMenu src={toggle === "true" ? BURGER_GREY_SVG : BURGER_SVG} alt="burger" onClick={onBurgerClickHandler}/>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: ${(props) => props.toggle === "true" ? "white" : "transparent"};
    box-shadow: ${(props) => props.toggle === "true" ? "0px 4px 15px 0px rgba(16, 17, 55, 0.25)" : "none"};
    transition-property: opacity;
    transition: 0.5s;
    .inner-mobile{
        display: flex;
        justify-content: space-between;
        padding-top: 12px;
        padding-bottom: 12px;
    }
`

const Logo = styled.img`
    width: 120px;
`

const ButtonMenu = styled.img`
`

export default Header;