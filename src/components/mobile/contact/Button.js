import styled from "styled-components";

function Button({icon, title, desc, onClick}){
    return(
        <Container onClick={onClick}>
            <IconWrap>
                <Icon src={icon} alt="icon"/>
            </IconWrap>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    border-radius: 2px;
    background: linear-gradient(180deg, #000 0%, #9762B6 100%);
    padding-top: 16px;
    padding-bottom: 16px;
    width: 100%;
`

const IconWrap = styled.div`
    position: relative;
    background-color:#81B4EA4D;
    height: 30px;
    width: 30px;
    border-radius: 50%;
`

const Icon = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
`

const Title = styled.div`
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
`

const Desc = styled.div`
    color: rgba(255, 255, 255, 0.85);
    font-size: 12px;
    font-weight: 400;
    white-space: pre-wrap;
    text-align: center;
`


export default Button;