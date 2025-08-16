import styled from "styled-components";

export const BaseInfoContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  height: 596px;
  gap: 24px;
  border-radius: 4px;
  padding: 64px;

  img {
    width: 295px;
    height: 308px;

    object-fit: contain;

    @media (max-width: 768px) {
      width: 238px;
      height: 248px;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #2f2e41;
    margin: 0;
    text-align: center;
    font-family: "Open Sans", sans-serif;
  }

  p {
    font-size: 16px;
    color: #2f2e41;
    margin: 0;
    text-align: center;
    line-height: 1.5;
    font-family: "Open Sans", sans-serif;
  }

  @media (max-width: 768px) {
    height: 517px;
  }
`;

export const Button = styled.button`
  background: #009edd;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  width: 173px;
  height: 40px;
  text-transform: uppercase;
`;
