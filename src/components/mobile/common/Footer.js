import styled from "styled-components";
import LOGO_GREY from "../../../images/logo_grey.svg"

function Footer(){
    return(
        <Container>
            <div className="inner-mobile">
                <CompanyDesc>
                    <Logo src={LOGO_GREY} alt="logo"/>
                    <Company>
                        <Desc><Item>주식회사 제이투케이 코리아</Item></Desc>
                        <Desc><Item>이메일 : j2kkorea@gmail.com</Item><Item>대표: 김지수</Item></Desc>
                    </Company>
                    <Desc>주소 : 충청남도 천안시 동남구 단대로 11, 생명공학창업보육센터(안서동)(310호 창터3.3)</Desc>
                    <Desc>Copyright ⓒ J2K KOREA INC. All Rights Reserved.</Desc>
                </CompanyDesc>
                <CSDesc>
                    <Label>고객센터</Label>
                    <Tel>Tel. 010-5682-0609</Tel>
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
    background: linear-gradient(180deg, #FFF 0%, #E4DFE8 100%);
    .inner-mobile{
        display: flex;
        flex-direction: column;
        gap:16px;
        padding-top: 16px;
        padding-bottom: 16px;
    }
`

const CompanyDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Company = styled.div`
    
`

const Desc = styled.div`
    display: flex;
    gap: 50px;
    color: #999;
    font-size: 12px;
    font-weight: 400;
`

const Item = styled.span`
    
`

const Logo = styled.img`
    width: 100px;
`

const CSDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 8px;
    
`
const Label = styled.div`
    color: rgba(144, 153, 153, 0.60);
    font-size: 12px;
    font-weight: 400;
`

const Tel = styled.div`
    color: #999;
    font-size: 12px;
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