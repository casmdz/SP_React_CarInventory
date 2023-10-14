// store is like an mini temporary in-the-middle database
// compontents can access the store 

import { configureStore } from '@reduxjs/toolkit'
import carsReducer from './carSlice'
// import { reducer } from './carSlice'
import selectedCarReducer from './selectedCarSlice'


export default configureStore({
  reducer: {
    cars: carsReducer,
    selectedCar: selectedCarReducer,
  }, 
  devTools: true, 
})




// https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow

// A Redux store is created using a root reducer function
// The store calls the root reducer once, and saves the return value as its initial state
// When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed