import styled from "styled-components";
import LOGO_WHITE from "../../images/logo_white.svg";
import LOGO_BLACK from "../../images/logo_black.svg";
import useHeader from "../../hooks/home/useHeader";
import { useNavigate } from "react-router-dom";

function Header(){
    const {headerColor} = useHeader();
    const navigate = useNavigate();
    return(
        <Container headercolor={headerColor}>
            <div className="inner">
                <Logo src={headerColor !== "transparent" ? LOGO_BLACK : LOGO_WHITE} alt="logo"/>
                <ItemWrap headercolor={headerColor}>
                    <Item onClick={() => navigate("/")}>COMPANY</Item>
                    <Item onClick={() => navigate("/product")}>PRODUCT</Item>
                    <Item onClick={() => navigate("/contact")}>CONTACT US</Item>
                </ItemWrap>
                <ButtonWrap headercolor={headerColor}>
                    <Option>로그인</Option>
                    <Option>회원가입</Option>
                </ButtonWrap>
            </div>
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
    gap: 36px;
`

const Option = styled.div`
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
`

export default Header;