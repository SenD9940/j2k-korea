import styled from "styled-components";

function Navigation({selectedNav, onNavClickHandler}){
    return(
        <Container>
            <Item id="common" onClick={() => onNavClickHandler("common")} isclicked={selectedNav === "common" ? "true" : "false"}>
                <ItemTitle>AI 상담원 연결</ItemTitle>
                <ItemContent>제품 개발/생산/유통/마케팅 전반 문의 사항에 대해서 빠르게 답변 드립니다</ItemContent>
            </Item>
            <Item id="service" onClick={() => onNavClickHandler("service")} isclicked={selectedNav === "service" ? "true" : "false"}>
                <ItemTitle>업체 정보 AI 상담</ItemTitle>
                <ItemContent>J2K가 보유하고 있는 업체 정보 POOL을 빠르게 제공합니다</ItemContent>
            </Item>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 20px;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-radius: 2px;
    background: ${props => props.isclicked === "true" ? "linear-gradient(115deg, #363636 3.93%, #4A1B65 96.07%)" : "#A1A1A1"};
    padding: 20px;
    flex-basis: 100%;
    &:hover{
        background: linear-gradient(115deg, #363636 3.93%, #4A1B65 96.07%);
    }
`

const ItemTitle = styled.div`
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
`

const ItemContent = styled.div`
    color: rgba(255, 255, 255, 0.85);
    font-size: 14px;
    font-weight: 400;
`

export default Navigation;