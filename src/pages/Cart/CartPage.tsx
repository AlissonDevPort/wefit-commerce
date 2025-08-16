import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import BaseInfoContainer from "../../components/BaseInfoContainer/BaseInfoContainer";
import EmptyPicture from "../../assets/empty-pic.svg";
import Cart from "./components";
import { CartContainer, CartItems } from "./Cart.styles";

const CartPage = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();

  const hasItems = items?.length > 0;

  if (!hasItems) {
    return (
      <BaseInfoContainer
        image={EmptyPicture}
        alt="Parece que não há nada por aqui :("
        title="Parece que não há nada por aqui :("
        buttonText="VOLTAR"
        onButtonClick={() => navigate("/")}
      />
    );
  }

  return (
    <CartContainer key="cart-items-container">
      <CartItems>
        <Cart.CartHeader />
        <Cart.CartItemsList items={items} />
        <Cart.CartSummary />
      </CartItems>
    </CartContainer>
  );
};

export default CartPage;
