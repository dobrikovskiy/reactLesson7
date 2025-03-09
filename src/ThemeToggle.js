import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './redux/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>
        Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
      </button>
    </div>
  );
};

export default ThemeToggle;