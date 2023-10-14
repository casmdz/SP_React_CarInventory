import { createSlice } from '@reduxjs/toolkit';

const selectedCarSlice = createSlice ({
    name: 'selectedCar',
    initialState: {
        car_ID: null,
        car_data: null,
    },
    reducers: {
        // increment: state => {state.make += 1},
        // chooseMake: (state, action) => { state.car_make = action.payload}, 
        setSelectedCar: (state, action ) => { 
            state.car_ID = action.payload;
            state.car_data = action.payload;
        },
        clearSelectedCar: (state) => {
            state.car_ID = null;
            state.car_data = null;
        },
    },
});


export default selectedCarSlice.reducer
// export const reducer = carSlice.reducer;
export const { setSelectedCar, clearSelectedCar } = selectedCarSlice.actions
