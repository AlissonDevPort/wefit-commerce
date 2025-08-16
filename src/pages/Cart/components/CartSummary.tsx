import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../store/cartSlice";
import { formatPrice } from "../../../utils/price";
import {
  CartSummary as StyledCartSummary,
  SummaryTotal,
  CheckoutButton,
  CartInfoText,
  TotalPrice,
  Divider,
} from "../Cart.styles";
import type { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    dispatch(clearCart());
    navigate("/sucesso");
  };

  return (
    <>
      <Divider />
      <StyledCartSummary>
        <CheckoutButton onClick={handleCheckout}>
          Finalizar Pedido
        </CheckoutButton>
        <SummaryTotal>
          <CartInfoText>TOTAL</CartInfoText>
          <TotalPrice>{formatPrice(totalPrice)}</TotalPrice>
        </SummaryTotal>
      </StyledCartSummary>
    </>
  );
};

export default CartSummary;
