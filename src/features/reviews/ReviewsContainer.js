import React from "react";
import { useSelector } from "react-redux";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

function ReviewsContainer({ restaurant = {} }) {
  const reviews = useSelector((state) =>
    state.reviews.entities.filter((rev) => rev.restaurantId === restaurant.id)
  );


  return (
    <div>
      <ReviewInput restaurant={restaurant} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default ReviewsContainer;
