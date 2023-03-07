import React from "react";
import Reviews from "./Reviews";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput({restaurant}) {

  const [comment, setComment] = useState("")
  const dispatch = useDispatch()



  function handleChange(e){
    setComment(e.target.value)
  }

  function onSubmit(e){
    e.preventDefault()
    dispatch(reviewAdded({
      comment: comment,
      restaurantId: restaurant.id
    }))
  }

  return (
   <>
      <form onSubmit={onSubmit}>
        <label htmlFor="comment">comment</label>
        <textarea id = "comment" value = {comment}  type = "text" onChange = {handleChange}></textarea>
        <input type = "submit" value = "Add Review"/>
      </form>
   </>
   );
}

export default ReviewInput;
