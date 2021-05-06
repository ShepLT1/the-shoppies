import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/SearchSlice';
import resultReducer from '../features/results/ResultSlice';
import nominationReducer from '../features/nominations/NominationSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    results: resultReducer,
    nominations: nominationReducer
  },
});
