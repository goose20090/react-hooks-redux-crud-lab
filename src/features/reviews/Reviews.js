import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {
  console.log(reviews); // <-- add this line
  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}

export default Reviews;
