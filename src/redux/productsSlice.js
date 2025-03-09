import { createSlice } from '@reduxjs/toolkit';

// Функция для загрузки состояния из localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('productsState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// Функция для сохранения состояния в localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('productsState', serializedState);
    } catch (err) {
        console.error('Ошибка при сохранении состояния:', err);
    }
};

const initialState = loadState() || {
    products: [{
            id: 1,
            name: 'Продукт 1',
            description: 'Описание продукта 1',
            price: 100,
            available: true,
        },
        {
            id: 2,
            name: 'Продукт 2',
            description: 'Описание продукта 2',
            price: 200,
            available: false,
        },
    ],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                id: Date.now(),
                ...action.payload,
            };
            state.products.push(newProduct);
            saveState(state); // Сохраняем состояние в localStorage
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
            saveState(state); // Сохраняем состояние в localStorage
        },
        toggleAvailability: (state, action) => {
            const product = state.products.find(
                (product) => product.id === action.payload
            );
            if (product) {
                product.available = !product.available;
                saveState(state); // Сохраняем состояние в localStorage
            }
        },
        updateProduct: (state, action) => {
            const { id, name, description, price, available } = action.payload;
            const product = state.products.find((product) => product.id === id);
            if (product) {
                product.name = name;
                product.description = description;
                product.price = price;
                product.available = available;
                saveState(state); // Сохраняем состояние в localStorage
            }
        },
    },
});

export const { addProduct, deleteProduct, toggleAvailability, updateProduct } =
productsSlice.actions;
export default productsSlice.reducer;