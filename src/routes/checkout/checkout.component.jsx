import "./checkout.styles.scss";
import { UserContext } from "../../contexts/user.context";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CartItem from "../../components/cart-item/cart-item.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">Price</div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((CartItem) => {
        return <CheckoutItem key={CartItem.id} cartItem={CartItem} />;
      })}
      <span className="total">Total: {total}</span>
    </div>
  );
};
export default Checkout;
