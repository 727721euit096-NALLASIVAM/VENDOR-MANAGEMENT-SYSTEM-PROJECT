import React from "react";
import "../Styles/Card.css";
import axios from "axios";


const Cards = ({ item, setCart, handleClick }) => {
  const { id, title, author, price, img } = item;

  const handleAddToCart = () => {
    axios.post("http://localhost:8080/api/v1/auth", item)
      .then((response) => {
        console.log("Item added to cart:", response.data);
        alert("Successfully added to cart!");
        setCart((prevCart) => [...prevCart, item]);

        handleClick(item);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  const handleButtonClicked = () => {
    handleAddToCart();
    handleClick(item);
  };

  return (
    <div className="dis">
      <div className="cards">
        <img src={img} alt="" />
        <p>{id}</p>
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}</p>
        <button onClick={handleButtonClicked}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
