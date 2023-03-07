import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";

function RestaurantsContainer() {

  const dispatch = useDispatch();

  const restaurants = useSelector((state)=> state.restaurants.entities);


  function handleSubmit(name){

    dispatch(restaurantAdded(name))
  }
  return (
    <div>
      <p>length of restaraunts array: {restaurants.length}</p>
      <RestaurantInput handleSubmit= {handleSubmit}/>
      <Restaurants restaurants= {restaurants}/>
    </div>
  );
}

export default RestaurantsContainer;
