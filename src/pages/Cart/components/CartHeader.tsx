import { memo } from "react";
import { CartHeader as StyledCartHeader, CartInfoText } from "../Cart.styles";

const CartHeader = memo(() => {
  return (
    <StyledCartHeader>
      <CartInfoText>PRODUTO</CartInfoText>
      <CartInfoText>QTD</CartInfoText>
      <CartInfoText>SUBTOTAL</CartInfoText>
      <CartInfoText></CartInfoText>
    </StyledCartHeader>
  );
});

export default CartHeader;
