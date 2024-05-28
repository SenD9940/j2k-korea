import styled from "styled-components";

function ReviewItem({title, contents, writer}){
    const getContents = () => {
        if(!contents){
            return null;
        }
        if(contents.includes("(")){
            const splited = contents.split("(");
            return <Contents>{splited[0]}<SpanStroke>{splited[1]}</SpanStroke>{splited[2]}</Contents>
        }else{
            return  <Contents>{contents}</Contents>
        }
    }
    return(
        <Container>
            <Title>{title}</Title>
            {getContents()}
            <Writer>{writer}</Writer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 2px;
    flex-grow: 1;
    flex-basis: 100%;
    background: linear-gradient(180deg, #FFF 71%, #DADADA 100%);
    padding: 30px;
`

const Title = styled.span`
    color: #9762B6;
    font-size: 18px;
    font-weight: 700;
`

const Contents = styled.div`
    color: #48494A;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    white-space: pre-line;
`

const SpanStroke = styled.span`
    color: #4A1B65;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
`

const Writer = styled.div`
    color: #48494A;
    font-size: 14px;
    font-weight: 400;
`

export default ReviewItem;