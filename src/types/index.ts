export interface Movie {
  id: number;
  image: string;
  price: number;
  title: string;
}

export interface CartItem extends Movie {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export interface RootState {
  cart: CartState;
}

export interface AddToCartPayload extends Movie {
  quantity: number;
}

export interface UpdateQuantityPayload {
  id: number;
  quantity: number;
}

export interface RemoveFromCartPayload {
  id: number;
}
