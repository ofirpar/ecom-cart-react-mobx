import { makeAutoObservable } from "mobx";
import { ICartItem } from "../types/cart-item";
import { ICartState } from "../types/cart-state";
import { IProduct } from "../types/item";

class CartStore implements ICartState {
  totalQuantity = 0;
  totalAmount = 0;
  cartItems: ICartItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product: IProduct) {
    const existing = this.cartItems.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.totalQuantity++;
    this.totalAmount += product.price;
  }
  removeFromCart(cartItem: ICartItem) {
    const existingIndex = this.cartItems.findIndex(
      (item) => item.id === cartItem.id
    );
    if (existingIndex > -1) {
      const item = this.cartItems[existingIndex];
      this.cartItems.splice(existingIndex, 1);
      this.totalQuantity -= item.quantity;
      this.totalAmount -= item.quantity * item.price;
    }
  }
}

const cartStore = new CartStore();
export default cartStore;
