import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import productsReducer from './productsSlice';
import tasksReducer from './tasksSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        products: productsReducer,
        tasks: tasksReducer,
    },
});

export default store;