import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Reducers';
const store = configureStore({
    reducer: counterReducer
});
export default store;
