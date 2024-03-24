import Card, { cartItems } from "./Card";
import foodItems from "../src/fooditems";
import { useCartSize } from "./CartSizeContext";
import { CartSizeContext } from "./CartSizeContext";
import { useContext } from "react";

function Welcome(){
    const categories = new Set();
    // const {cartSize} = useCartSize()
    let cartData = useContext(CartSizeContext);

  foodItems.forEach((item) => {
    categories.add(item.category);
  });
  return (
   <div className="flex">
    <div>
        <ul>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
        </ul>
    </div>
     <div className="flex flex-col justify-center m-4">
      {[...categories].map((category) => (
        <div>
          <h2 className="text-2xl font-semibold">{category}</h2>
          <div className="grid gap-x-0.5 grid-cols-1 sm:grid-cols-3 md:grid-cols-6">
            {foodItems
              .filter(function (item) {
                return item.category === category;
              })
              .map(function (item, index) {
                return<div className="my-2"> <Card dishId = {item.id} name = {item.name} price = {item.price} img = {item.img} /></div>;
              })}
          </div>
        </div>
      ))}
    </div>

    {/* cart place */}
    <div>
       <p>Total items in Cart : </p>
    </div>
   </div>
  );
}

export default Welcome;