import React from "react";
import { useState } from "react";

function RestaurantInput({handleSubmit}) {

  const [name, setName]= useState("")

  function handleChange(e){
    setName(e.target.value)
  }

  function onSubmit(e){
    e.preventDefault();
    handleSubmit(name)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">name</label>
        <input id = "name" value = {name} onChange = {handleChange}></input>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantInput;
