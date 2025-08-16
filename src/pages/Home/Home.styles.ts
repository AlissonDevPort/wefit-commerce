import styled from "styled-components";

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(328px, 338px));
  gap: 24px 16px;
  justify-content: center;
  @media (max-width: 768px) {
    gap: 16px;
  }
`;
