import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background: #2f2e41;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
  padding: 24px 0px;
`;

export const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const CartHighlightText = styled.span`
  color: #ffffff;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  @media (max-width: 425px) {
    display: none;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const CartTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CartQuantity = styled.span`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #999999;
`;

export const CartIcon = styled.img`
  padding: 8px;
  width: 40px;
  height: 40px;
`;
