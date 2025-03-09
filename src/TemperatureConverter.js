import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertCelsiusToFahrenheit = (value) => {
    return (value * 9) / 5 + 32;
  };

  const convertFahrenheitToCelsius = (value) => {
    return ((value - 32) * 5) / 9;
  };

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(convertCelsiusToFahrenheit(value).toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(convertFahrenheitToCelsius(value).toFixed(2));
  };

  const handleReset = () => {
    setCelsius('');
    setFahrenheit('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Температурный конвертер
      </Typography>
      <TextField
        label="Градусы Цельсия"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Градусы Фаренгейта"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="secondary" onClick={handleReset}>
        Сбросить
      </Button>

      {/* Кнопки для навигации */}
      <nav style={{ marginTop: '20px' }}>
        <Button variant="contained" color="primary" component={Link} to="/" style={{ margin: '10px' }}>
          На главную
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/about" style={{ margin: '10px' }}>
          О нас
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/todo" style={{ margin: '10px' }}>
          Список дел
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/products" style={{ margin: '10px' }}>
          Управление продуктами
         </Button>
      </nav>
    </Container>
  );
};

export default TemperatureConverter;