import React from "react";
import { useDispatch } from "react-redux";
import { reviewRemoved } from "./reviewsSlice";

function Review({ review }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(reviewRemoved(review.id));
  }

  return (
    <div>
      <p>{review.comment}</p>
      <button onClick={handleClick}>Delete Review</button>
    </div>
  );
}

export default Review;