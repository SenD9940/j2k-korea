import styled from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import useBoard from "../hooks/board/useBoard";
import Item from "../components/board/Item";

function Board(){
    const {boardList} = useBoard()

    const getBoardList = () => {
        if(!boardList.length){
            return null;
        }
        return boardList.map((item, index) => {
            return <Item key={index} title={item.title} writer={item.company} registerAt={item.register_at}/>
        })
    }
    return(
        <Container>
            <Header />
            <Contents>
                <div className="inner">
                    <Table>
                        <tbody>
                            <TrHead><TdHead width={600}>제목</TdHead><TdHead style={{textAlign:"center"}}>작성자</TdHead><TdHead style={{textAlign:"center"}}>작성일</TdHead></TrHead>
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
    .inner{
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


export default Board;