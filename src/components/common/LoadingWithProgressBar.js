import React, { useEffect, useRef } from "react";
import styled from "styled-components";


function LoadingWithProgressBar({title, subTitle, progress}){
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  return (
    <LoadingContainer>
      <Contents>
        <TitleWrap>
          <Title>{title}</Title>
          <TitleSub>{subTitle}</TitleSub>
        </TitleWrap>
        <ProgressBar ref={progressBarRef} progress={progress} />
      </Contents>
    </LoadingContainer>
  );
};



const LoadingContainer = styled.div`
  display: flex;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 20;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  width: 400px;
  min-width: 300px;
  background-color: white;
  border-radius: 16px;
  animation: fadeInUp 0.5s ease-in-out;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 24px;
`;

const TitleSub = styled.div`
  text-align: center;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.progress}%;
  padding: 2px;
  background-color: #4A1B65;
`;


export default LoadingWithProgressBar;