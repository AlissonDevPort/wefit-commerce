import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  width: 55px;
  height: 55px;
  background: conic-gradient(
    from 90deg at 50% 50%,
    rgba(128, 128, 128, 0.0001) -46.17deg,
    #ffffff 313.55deg,
    rgba(128, 128, 128, 0.0001) 313.83deg,
    #ffffff 673.55deg
  );
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  opacity: 1;
  position: relative;
  top: 13.8px;
  left: 13.8px;

  mask: radial-gradient(circle at center, transparent 25px, black 26px);
  -webkit-mask: radial-gradient(circle at center, transparent 25px, black 26px);
`;
