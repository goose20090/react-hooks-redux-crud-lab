import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
    entities: []
}

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers:{
        reviewAdded(state, action){
            state.entities.push({
                comment: action.payload.comment,
                id: uuid(),
                restaurantId: action.payload.restaurantId
            })
        },
        reviewRemoved(state, action){
            const index = state.entities.findIndex((review)=> review.Id === action.payload )
            state.entities.splice(index, 1)
        }
    }
})

export const {reviewAdded, reviewRemoved} = reviewsSlice.actions;

export default reviewsSlice.reducer;
