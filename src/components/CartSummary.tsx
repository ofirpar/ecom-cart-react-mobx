import React from "react";
import { ICartItem } from "../types/cart-item";
import { observer } from "mobx-react-lite";
import cartStore from "../store/CartStore";

const CartSummary: React.FC = observer(() => {
  return (
    <div>
      <h2>Cart</h2>
      {cartStore.cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartStore.cartItems.map((item: ICartItem) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => cartStore.removeFromCart(item)}>
              Remove
            </button>
          </div>
        ))
      )}
      <h3>Total: ${cartStore.totalAmount}</h3>
    </div>
  );
});

export default CartSummary;
