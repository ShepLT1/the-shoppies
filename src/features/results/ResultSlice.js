import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
}

const resultSlice = createSlice({
    name: "results",
    initialState,
    reducers: {
        updateResults: (state, action) => {
            state.value = action.payload
        }
    }
});

export const getResults = (state) => state.results.value;

export const { updateResults } = resultSlice.actions;
export default resultSlice.reducer;