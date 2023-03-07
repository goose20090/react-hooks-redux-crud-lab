import React from "react";
import { useDispatch } from "react-redux";
import { restaurantRemoved } from "./restaurantsSlice";
import ReviewsContainer from "../reviews/ReviewsContainer";

function Restaurant({ restaurant }) {

  const dispatch = useDispatch()

  function handleClick(){
    dispatch(restaurantRemoved(restaurant.id))
  }
  return (
    <div>
        <h2>{restaurant.name}</h2>
        <button onClick = {handleClick}> Delete Restaurant </button>
        <ReviewsContainer restaurant={restaurant} />

    </div>
  );
}

export default Restaurant;
