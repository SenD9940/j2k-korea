import styled from "styled-components";
import InputText from "./InputText";

const InputModal = ({ title, placeholder, value, onChange, isOpen, onClose, onConfirm }) => {
  return (
    <>
      {isOpen && (
        <Back >
          <Box>
            <h2>{title}</h2>
            <InputText value={value} onChange={onChange} placeholder={placeholder}/>
            <Buttons>
              <Button onClick={onClose}>{onConfirm ? "취소" : "확인"}</Button>
              {onConfirm && <Button onClick={onConfirm}>확인</Button>}
            </Buttons>
          </Box>
        </Back>
      )}
    </>
  );
};

export default InputModal;

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Box = styled.div`
  background-color: white;
  width: 420px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
  animation-name: fadeInUp;
  animation-duration: 1s;

  h2 {
    margin-bottom: 0px;
  }
`;


const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  height: 50px;
  padding: 0 47px;
  background-color: #4A1B65;
  color: white;
  border: none;
  border-radius: 52px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
`;
