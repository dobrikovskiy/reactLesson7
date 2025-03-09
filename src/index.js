import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

// Получаем корневой элемент
const container = document.getElementById('root');
const root = createRoot(container); // Создаем корневой элемент

// Рендерим приложение
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);