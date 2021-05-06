import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ""
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        updateSearch: (state, action) => {
            state.value = action.payload
        }
    }
});

export const getSearch = (state) => state.search.value;

export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;