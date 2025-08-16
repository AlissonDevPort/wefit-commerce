import CartItemWeb from "./CartItemWeb";
import CartItemMobileComponent from "./CartItemMobile";
import type { CartItem as CartItemType } from "../../../types";

interface CartItemsListProps {
  items: CartItemType[];
}

const CartItemsList = ({ items }: CartItemsListProps) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          {/* Layout Web (768px) */}
          <CartItemWeb item={item} />

          {/* Layout Mobile (768px) */}
          <CartItemMobileComponent item={item} />
        </div>
      ))}
    </>
  );
};

export default CartItemsList;
