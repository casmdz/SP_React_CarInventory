// https://redux.js.org/tutorials/quick-start#create-a-redux-state-slice
// https://redux.js.org/tutorials/essentials/part-2-app-structure#rules-of-reducers

import { createSlice } from '@reduxjs/toolkit';



const carSlice = createSlice ({
    name: 'cars',
    initialState: {
        make: "Make", model: "Model", color: "", year: "Year"
        // car_make: "Make", car_model: "Model", car_color: "Color", car_year: "Year"
    },
    reducers: {
        // increment: state => {state.make += 1},
        chooseMake: (state, action) => { state.make = action.payload}, 
        chooseModel: (state, action) => { state.model = action.payload}, 
        chooseYear: (state, action) => { state.year = action.payload}, 
        chooseColor: (state, action) => { state.color = action.payload}, 
    }
}) 


export default carSlice.reducer
// export const reducer = carSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseColor } = carSlice.actions

//  reducer functions must always create new state values immutably, by making copies! 