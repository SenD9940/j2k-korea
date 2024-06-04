import styled from "styled-components";
import LOGO_BLACK from "../../images/logo_black.svg";
import { useNavigate } from "react-router-dom";
import useHeader from "../../hooks/common/useHeader";
import { Slide } from "react-awesome-reveal";

function Header(){
    const navigate = useNavigate();
    const {toggle, handleMouseEnter, handleMouseLeave, isDropdownVisible, onLogoutClickHandler} = useHeader();
    const uid = sessionStorage.getItem("uid");
    return(
        <Container toggle={toggle}>
            <div className="inner">
                <Logo src={LOGO_BLACK} alt="logo"/>
                <ItemWrap >
                    <Item onClick={() => navigate("/")}>COMPANY</Item>
                    <Item onClick={() => navigate("/product")}>PRODUCT</Item>
                    <Item onMouseEnter={handleMouseEnter} onClick={() => navigate("/board")}>CONTACT US</Item>
                </ItemWrap>
                <ButtonWrap props="">
                    <Option onClick={() => {uid ? onLogoutClickHandler() : navigate("/login")}}>{uid ? "로그아웃" : "로그인"}</Option>
                    <Option>회원가입</Option>
                </ButtonWrap>
            </div>
           {isDropdownVisible? 
           <Slide direction="right">
                <SubHeader onMouseLeave={handleMouseLeave}>
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
    transition-property: opacity;
    transition: 0.5s;
    background-color: ${(props) => props.toggle === "true" ? "white" : "transparent"};
    box-shadow: ${(props) => props.toggle ==="true" ? "0px 4px 15px 0px rgba(16, 17, 55, 0.25)" : "none"};
    .inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const Logo = styled.img`
`

const ItemWrap = styled.div`
    color: #434343;
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
    color: #434343;
    display: flex;
    justify-self: flex-end;
    gap: 36px;
`

const Option = styled.div`
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
`

const SubHeader = styled.div`
    position: relative;
    left: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    padding: 10px;
`

export default Header;