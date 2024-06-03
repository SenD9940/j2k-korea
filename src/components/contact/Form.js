import styled from "styled-components";
import InputText from "../common/InputText";
import DragAndDrop from "../common/DragAndDrop";
import DELETE_SVG from "../../images/delete.svg";
import useContact from "../../hooks/contact/useContact";
import LoadingWithProgressBar from "../common/LoadingWithProgressBar";

function Form(){
    const {fileList, handleChange, inputs, onChange, onSubmitClick, targetFileName, progress, showLoading} = useContact();

    const getFileList = () => {
        return fileList.map((item, index) => {
            return <Item key={index}><FileName>{item.name}</FileName><ButtonDelete src={DELETE_SVG} alt="delete"/></Item>
        })
    }

    return(
        <Container>
            <div className="inner">
                {showLoading ? <LoadingWithProgressBar title={"파일 업로드"} subTitle={targetFileName} progress={progress}/> : null}
                <InputWrap>
                    <InputText type={"password"} placeholder={"비밀번호"} name={"password"} value={inputs.password} onChange={onChange}/>
                    <InputText placeholder={"회사명"} name={"company"} value={inputs.company} onChange={onChange}/>
                </InputWrap>
                <InputWrap>
                    <InputText placeholder={"연락처"} name={"tel"} value={inputs.tel} onChange={onChange}/>
                    <InputText placeholder={"이메일"} name={"email"} value={inputs.email} onChange={onChange}/>
                </InputWrap>
                <TextArea placeholder="문의 내용" name="content" onChange={onChange} value={inputs.content}></TextArea>
                <DragAndDrop handleChange={handleChange}/>
                <ItemWrap>
                    {getFileList()}
                </ItemWrap>
                <ButtonSubmit onClick={onSubmitClick}>문의하기</ButtonSubmit>
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 60px;
    width: 100%;
    .inner{
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
`

const InputWrap = styled.div`
    display: flex;
    gap: 18px;
    ::placeholder{
        color:#999;
    }
`
const TextArea = styled.textarea`
    padding: 12px;
    border-radius: 2px;
    border: 1px solid #C7CCD2;
    background: #FFF;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    resize: vertical;
    ::placeholder{
        color:#999;
    }
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px dashed #4A1B65;
`

const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const ButtonDelete = styled.img`
    width: 10px;
    height: 10px;
    cursor: pointer;
`

const FileName = styled.span`
    color: #999;
    font-size: 12px;
    font-weight: 400;
`

const ButtonSubmit = styled.button`
    margin-top: 40px;
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    border-radius: 2px;
    background-color: #4A1B65;
    border: none;
    padding: 12px;
    cursor: pointer;
`


export default Form;