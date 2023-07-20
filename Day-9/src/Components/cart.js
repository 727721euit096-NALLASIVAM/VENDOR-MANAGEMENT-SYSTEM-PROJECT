import React, { useState, useEffect } from "react";
import "../Styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
        <div className="cart_img">
        <center>
            <img src={item.img} alt="" />
            <br></br>
            <span>EQUIPMENT NAME: </span>
            <span>{item.title}</span>
            </center>
          </div>
          <div>
          <center>
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, +1)}>+</button>
            </center>
          </div>
          <div>
          <center>
          <span>Price: </span>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            </center>
          </div>
        </div>
      
      ))}
      <div className="total">
      <center>
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
        </center>
      </div>
      </article>
  );
};

export default Cart;