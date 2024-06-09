import styled from "styled-components";

function ValueItem({title, contents}){
    return(
        <Container>
            <Title>{title}</Title>
            <Contents>{contents}</Contents>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(74, 27, 101, 0.08);
    padding: 40px 20px;
    gap: 8px;
`

const Title = styled.span`
    color: #4A1B65;
    font-size: 14px;
    font-weight: 500;
`

const Contents = styled.span`
    color: #000;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 140%;
    white-space: pre-line;
`

export default ValueItem;