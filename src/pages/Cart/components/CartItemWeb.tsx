import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../../store/cartSlice";
import { formatPrice } from "../../../utils/price";
import {
  CartItem,
  ItemInfo,
  ItemImage,
  ItemDetails,
  ItemTitle,
  ItemPrice,
  QuantityControls,
  QuantityButton,
  Quantity,
  RemoveButton,
  QuantityBorderBox,
} from "../Cart.styles";
import PlusIcon from "../../../assets/plus-icon.svg";
import MinusIcon from "../../../assets/minus-icon.svg";
import TrashCan from "../../../assets/trash-can.svg";
import type { CartItem as CartItemType } from "../../../types";

interface CartItemWebProps {
  item: CartItemType;
}

const CartItemWeb = ({ item }: CartItemWebProps) => {
  const dispatch = useDispatch();

  return (
    <CartItem key={`web-${item.id}`}>
      <ItemInfo>
        <ItemImage src={item.image} alt={item.title} />
        <ItemDetails>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemPrice>{formatPrice(item.price)}</ItemPrice>
        </ItemDetails>
      </ItemInfo>

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
        </QuantityButton>
        <QuantityBorderBox>
          <Quantity>{item.quantity}</Quantity>
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
      <ItemPrice>{formatPrice(item.price * item.quantity)}</ItemPrice>
      <RemoveButton onClick={() => dispatch(removeFromCart({ id: item.id }))}>
        <img src={TrashCan} alt="Remover item" />
      </RemoveButton>
    </CartItem>
  );
};

export default CartItemWeb;
