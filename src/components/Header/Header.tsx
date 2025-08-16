import { useSelector } from "react-redux";
import cartBag from "../../assets/cart-bag.svg";
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  CartHighlightText,
  CartContainer,
  CartTextBox,
  CartQuantity,
  CartIcon,
} from "./Header.styles";
import type { RootState } from "../../store/store";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">WeMovies</Logo>;
        <NavLinks>
          <CartContainer to="/carrinho">
            <CartTextBox>
              <CartHighlightText>Meu Carrinho</CartHighlightText>
              <CartQuantityDisplay />
            </CartTextBox>
            <CartIcon src={cartBag} alt="Cart" />
          </CartContainer>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const CartQuantityDisplay = () => {
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);
  return <CartQuantity>{totalItems} itens</CartQuantity>;
};
