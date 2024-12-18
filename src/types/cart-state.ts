import { ICartItem } from "./cart-item";
import { IProduct } from "./item";

export interface ICartState {
  cartItems: ICartItem[];
  totalQuantity: number;
  totalAmount: number;
  addToCart: (product: IProduct) => void;
  removeFromCart: (item: ICartItem) => void;
}
