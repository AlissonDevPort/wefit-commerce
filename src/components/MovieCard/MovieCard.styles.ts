import styled from "styled-components";

export const Card = styled.div`
  background: white;
  width: 338px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  gap: 8px;
  @media (max-width: 768px) {
    width: 328px;
    height: 324px;
  }
`;

export const MovieImage = styled.img`
  width: 147px;
  height: 188px;
  object-fit: cover;
  display: block;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const MovieTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  text-align: center;
  color: #333333;
`;

export const Price = styled.span`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #2f2e41;
`;

interface AddButtonProps {
  isInCart?: boolean;
}

export const AddButton = styled.button<AddButtonProps>`
  cursor: pointer;
  background: ${({ isInCart }) => (isInCart ? "#039b00" : "#009edd")};
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  transition: all 0.3s;
  width: 100%;
  height: 40px;
  gap: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  img {
    width: 12px;
    height: 12px;
    object-fit: contain;
  }
  span {
    font-size: 12px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    color: #ffffff;
  }

  &:hover {
    background: ${({ isInCart }) => (isInCart ? "#027a00" : "#0073a1")};
  }
`;

export const AddButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
