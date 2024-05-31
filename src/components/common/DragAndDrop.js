import { FileUploader } from "react-drag-drop-files";
import styled from "styled-components";

function DragAndDrop({handleChange}){
    const fileTypes = ["JPG", "PNG", "GIF"];
    return (
        <Container>
            <FileUploader classes="file-uploader" handleChange={handleChange} name="file" types={fileTypes} label="파일을 드래그 하시거나 클릭을 해주세요"/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    .file-uploader{
        max-width: 100%;
        height: 150px;
    }
`
export default DragAndDrop;