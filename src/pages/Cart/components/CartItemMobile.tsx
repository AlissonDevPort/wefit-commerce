import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../../store/cartSlice";
import { formatPrice } from "../../../utils/price";
import {
  CartItemMobile,
  ItemImage,
  ItemTitle,
  ItemPrice,
  QuantityControls,
  QuantityButton,
  Quantity,
  RemoveButton,
  CartInfoText,
  MobileItemContainer,
  MobileTopContainer,
  MobileTopRight,
  MobileBottomContainer,
  MobileSubtotalContainer,
  QuantityBorderBox,
} from "../Cart.styles";
import PlusIcon from "../../../assets/plus-icon.svg";
import MinusIcon from "../../../assets/minus-icon.svg";
import TrashCan from "../../../assets/trash-can.svg";
import type { CartItem as CartItemType } from "../../../types";

interface CartItemMobileProps {
  item: CartItemType;
}

const CartItemMobileComponent = ({ item }: CartItemMobileProps) => {
  const dispatch = useDispatch();

  return (
    <CartItemMobile key={`mobile-${item.id}`}>
      <ItemImage src={item.image} alt={item.title} />

      <MobileItemContainer>
        <MobileTopContainer>
          <ItemTitle>{item.title}</ItemTitle>
          <MobileTopRight>
            <ItemPrice>{formatPrice(item.price * item.quantity)}</ItemPrice>
            <RemoveButton
              onClick={() => dispatch(removeFromCart({ id: item.id }))}
            >
              <img src={TrashCan} alt="Remover item" />
            </RemoveButton>
          </MobileTopRight>
        </MobileTopContainer>

        <MobileBottomContainer>
          <QuantityControls>
            <QuantityButton
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1,
                  })
                )
              }
            >
              <img src={MinusIcon} alt="Diminuir quantidade" />
            </QuantityButton>{" "}
            <QuantityBorderBox>
              <Quantity>{item.quantity}</Quantity>{" "}
            </QuantityBorderBox>
            <QuantityButton
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1,
                  })
                )
              }
            >
              <img src={PlusIcon} alt="Aumentar quantidade" />
            </QuantityButton>
          </QuantityControls>

          <MobileSubtotalContainer>
            <CartInfoText>SUBTOTAL</CartInfoText>
            <ItemPrice>{formatPrice(item.price * item.quantity)}</ItemPrice>
          </MobileSubtotalContainer>
        </MobileBottomContainer>
      </MobileItemContainer>
    </CartItemMobile>
  );
};

export default CartItemMobileComponent;
