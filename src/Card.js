import { useState, useEffect } from "react";
import foodItems from "../src/fooditems";
import { useCartSize } from "../src/CartSizeContext";
import "./Card.css";

let cartSet = new Set();
export let cartItems = [];

function Card(props) {
  const [message, setMessage] = useState("Add to Cart");
  const {updateCartSize} = useCartSize();

  function addToCart(dishId) {
    console.log("add" + " " + dishId);
    if (!cartSet.has(dishId)) {
      let item = foodItems.find((dish) => dish.id === dishId);
      cartItems.push(item);
      cartSet.add(dishId);
      updateCartSize(cartItems.length);
    }
  }

  function removeFromCart(dishId) {
    console.log("rmeove");
    if (cartSet.has(dishId)) {
      cartItems = cartItems.filter((item) => item.id !== dishId);
    }
    cartSet.delete(dishId);
    updateCartSize(cartItems.length);
  }

  const changeText = () => {
    setMessage((message) => {
      if (message === "Add to Cart") {
        return "Remove";
      }
      return "Add to Cart";
    });
  };

  return (
    <div className="flex flex-col max-w-fit max-h-fit bg-red-200 p-4">
      <img src={props.img} alt="" className="h-40 w-40"></img>
      <div className="flex flex-col font-semibold mt-2 text-center">
        <p>{props.name}</p>
        <p>Rs. {props.price}</p>
        <button
          className="bg-green-700 text-white p-2 rounded m-2"
          onClick={() => {
            cartSet.has(props.dishId)
              ? removeFromCart(props.dishId)
              : addToCart(props.dishId);
            changeText();
          }}
        >
          {message}
        </button>
      </div>
    </div>
  );
}

export default Card;
