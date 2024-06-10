import styled from "styled-components";
import Header from "../../components/mobile/common/Header";
import PartName from "../../components/mobile/common/PartName";
import PENCIL_SVG from "../../images/pencil.svg";
import AI_SVG from "../../images/ai.svg";
import Button from "../../components/mobile/contact/Button";
import { useNavigate } from "react-router-dom";

function MContact(){
    const navigate = useNavigate();
    const uid = sessionStorage.getItem("uid");
    return(
        <>
            <Header />
            <Contents>
                <div className="inner-mobile">
                    <PartName>AI COUNSEL</PartName>
                    <Buttons>
                        <Button icon={AI_SVG} title={"AI 상담원 연결"} desc={"제품 개발/생산/유통/마케팅\n전반 문의 사항에 대해서 빠르게 답변 드립니다"} onClick={() => navigate("/m/counsel", {state:"common"})}/>
                        <Button icon={AI_SVG} title={"업체 정보 AI 상담"} desc={"J2K가 보유하고 있는 업체 정보 POOL을 빠르게 제공합니다"} onClick={() => navigate("/m/counsel", {state:"service"})}/>
                    </Buttons>
                </div>
            </Contents>
        </>
    )
}



const Contents = styled.div`
    margin-top: 84px;
    .inner-mobile{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;
    }
`
const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:12px;
`


export default MContact;