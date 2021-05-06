import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
}

const nominationSlice = createSlice({
    name: "nominations",
    initialState,
    reducers: {
        updateNominations: (state, action) => {
            state.value = action.payload
        }
    }
});

export const getNominations = (state) => state.nominations.value;

export const { updateNominations } = nominationSlice.actions;
export default nominationSlice.reducer;