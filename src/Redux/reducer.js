import { createAction,createReducer } from "@reduxjs/toolkit";
const Local=createAction('Local')
export const LocalData=createReducer({ 
  favItem :localStorage.getItem("FavItem")? JSON.parse(localStorage.getItem("FavItem")) : [],
},
(builder)=>{
    builder.addCase(Local,(state,action)=>{
      const items = action.payload;
      state.favItem.push(items);
      localStorage.setItem("FavItem", JSON.stringify(state.favItem))
    })
}) 