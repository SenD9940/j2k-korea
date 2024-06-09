import styled from "styled-components";
import Header from "../../components/mobile/common/Header";
import Footer from "../../components/mobile/common/Footer";
import useBoard from "../../hooks/board/useBoard";
import Item from "../../components/mobile/board/Item";
import useComparePassword from "../../hooks/board/useComparePassword";
import InputModal from "../../components/desktop/common/InputModal";
import Modal from "../../components/desktop/common/Modal";

function MBoard(){
    const {boardList} = useBoard()
    const {input, onChange, showPasswordModal, setShowPasswordModal, showErrorModal, setShowErrorModal, onComparePasswordHandler, onConfirmClick} = useComparePassword();
    const getBoardList = () => {
        if(!boardList.length){
            return null;
        }
        return boardList.map((item, index) => {
            return <Item key={index} title={item.title} writer={item.company} registerAt={item.register_at} id={item.id} onComparePasswordHandler={onComparePasswordHandler}/>
        })
    }
    return(
        <Container>
            <InputModal isOpen={showPasswordModal} onConfirm={onConfirmClick} onClose={() => setShowPasswordModal(false)} title={"비밀번호를 입력해 주세요"} value={input} onChange={onChange} placeholder={"비밀번호"}/>
            <Modal isOpen={showErrorModal} onClose={() => setShowErrorModal(false)} title={"ERROR"} content={"비밀번호가 잘못되었습니다"}/>
            <Header />
            <Contents>
                <div className="inner-mobile">
                    <Table>
                        <tbody>
                            <TrHead><TdHead width={150}>제목</TdHead><TdHead style={{textAlign:"center"}}>작성자</TdHead><TdHead style={{textAlign:"center"}}>작성일</TdHead></TrHead>
                            {getBoardList()}
                        </tbody>
                    </Table>
                </div>
            </Contents>
            <Footer />
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
    .inner-mobile{
        margin-top: 160px;
    }
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse; 
`

const TrHead = styled.tr`
    border-bottom: 2px solid #999;
`

const TdHead = styled.td`
    padding: 8px;
    font-size: 14px;
    color: #434343;
`


export default MBoard;