import styled from "styled-components";
import LOGO_WHITE from "../../../images/logo_white.svg";
import LOGO_BLACK from "../../../images/logo_black.svg";
import useHeader from "../../../hooks/home/useHeader";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

function Header(){
    const {headerColor, handleMouseEnter, handleMouseLeave, isDropdownVisible, onLogoutClickHandler} = useHeader();
    const navigate = useNavigate();
    const uid = sessionStorage.getItem("uid");
    return(
        <Container headercolor={headerColor}>
            <div className="inner">
                <Logo src={headerColor !== "transparent" ? LOGO_BLACK : LOGO_WHITE} alt="logo" onClick={() => navigate("/")}/>
                <ItemWrap headercolor={headerColor}>
                    <Item onClick={() => navigate("/")}>COMPANY</Item>
                    <Item onClick={() => navigate("/product")}>PRODUCT</Item>
                    <Item onMouseEnter={handleMouseEnter} onClick={() => navigate("/board")}>CONTACT US</Item>
                </ItemWrap>
                <ButtonWrap headercolor={headerColor}>
                    <Option onClick={() => {uid ? onLogoutClickHandler() : navigate("/login")}}>{uid ? "로그아웃" : "로그인"}</Option>
                    <Option>회원가입</Option>
                </ButtonWrap>
            </div>
            {isDropdownVisible? 
            <Slide direction="right">
                <SubHeader headercolor={headerColor} onMouseLeave={handleMouseLeave}>
                    <Item onClick={() => navigate("/contact")}>문의하기</Item>
                    <Item onClick={() => navigate("/counsel")}>AI상담</Item>
                </SubHeader>
            </Slide>
            : null}
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;
    padding: 24px;
    background-color: ${(props) => props.headercolor};
    box-shadow: ${(props) => props.headercolor !== "transparent" ? "0px 4px 15px 0px rgba(16, 17, 55, 0.25)" : "none"};
    transition-property: opacity;
    transition: 0.5s;
    .inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const Logo = styled.img`
`

const ItemWrap = styled.div`
    color: ${(props) => props.headercolor !== "transparent" ? "#434343" : "white"};
    display: flex;
    gap: 85px;
    align-items: center;
    margin-left: -180px;
`

const Item = styled.span`
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
`

const ButtonWrap = styled.div`
    color: ${(props) => props.headercolor !== "transparent" ? "#434343" : "white"};
    display: flex;
    justify-self: flex-end;
    z-index: 10;
    gap: 36px;
`

const Option = styled.div`
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
`

const SubHeader = styled.div`
    color: ${(props) => props.headercolor !== "transparent" ? "#434343" : "white"};
    position: relative;
    left: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    padding: 10px;
`

export default Header;