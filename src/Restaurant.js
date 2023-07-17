import React ,{useState} from "react";
// import RestaurantButton from "./RestaurantButton";
import Order from "./Order";



const Restaurant = () => {
  // const [orders , setOrders]=useState(0);
  return (
    <div>
      {/* <div className="container"> */}
        <h3 className="order-title">Restaurant Orders</h3>
        <ul>
          <Order name="pizza" />
          <Order name="salads" />
          <Order name="Chocolate Cake" />

        </ul>
      </div>
  );
  // function orderOne(){
  //   setOrders(orders + 1);
  //   console.log("Hi");
  // }
};

export default Restaurant;
