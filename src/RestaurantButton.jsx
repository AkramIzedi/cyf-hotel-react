import React,{useState} from "react";
function RestaurantButton(props){

// const RestaurantButton = props =>{
    return(
        <button className="btn btn-primary" onClick={props.orderFunction}>
            Add 
        </button>
    );
};
export default RestaurantButton;