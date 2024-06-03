import styled from "styled-components";
import LOGO_GREY from "../../images/logo_grey.svg"

function Footer(){
    return(
        <Container>
            <div className="inner">
                <CompanyDesc>
                    <Logo src={LOGO_GREY} alt="logo"/>
                    <ButtonWrap><Button>개인정보처리방침</Button><Button>이용약관</Button></ButtonWrap>
                    <Company>
                        <Desc><Item>주식회사 제이투케이 코리아</Item><Item>대표: 김지수</Item><Item>이메일 : j2kkorea@gmail.com</Item></Desc>
                        <Desc>주소 : 충청남도 천안시 동남구 단대로 11, 생명공학창업보육센터(안서동)(310호 창터3.3)</Desc>
                        <Desc>Copyright ⓒ J2K KOREA INC. All Rights Reserved.</Desc>
                    </Company>
                </CompanyDesc>
                <CSDesc>
                    <Label>고객센터</Label>
                    <Tel>Tel. 043-1234-1234</Tel>
                    <ActiveWrap>
                        <ActiveTime>영업시간 09:00 ~ 17:00</ActiveTime>
                        <ActiveTime>점심시간 12:00 ~ 13:00</ActiveTime>
                    </ActiveWrap>
                </CSDesc>
            </div>
        </Container>
    )
}

const Container = styled.div`
    padding: 30px;
    background: linear-gradient(180deg, #FFF 0%, #E4DFE8 100%);
    .inner{
        display: flex;
        justify-content: space-between;
    }
`

const CompanyDesc = styled.div`
    
`

const ButtonWrap = styled.div`
    margin-top: 24px;
    display: flex;
    gap: 12px;
    color: #999;
    font-size: 15px;
    font-weight: 400;
`

const Button = styled.span`
    cursor: pointer;
`

const Company = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Desc = styled.div`
    color: #999;
    font-size: 12px;
    font-weight: 400;
`

const Item = styled.span`
    position: relative;
    padding-left: 8px;
    padding-right: 8px;
     /* 구분선과 텍스트 사이에 여유 공간을 줍니다. */
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background-color: #999;
    }
    &:first-child {
        padding-left: 0px;
        padding-right: 8px;
    }
    &:last-child::after {
        display: none;
    }
`

const Logo = styled.img`
`

const CSDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12px;
    
`
const Label = styled.div`
    color: rgba(144, 153, 153, 0.60);
    font-size: 13px;
    font-weight: 400;
`

const Tel = styled.div`
    color: #999;
    font-size: 24px;
    font-weight: 700;
`

const ActiveWrap = styled.div`
    display: flex;
    flex-direction: column;
`

const ActiveTime = styled.div`
    color: #999;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
`

export default Footer;