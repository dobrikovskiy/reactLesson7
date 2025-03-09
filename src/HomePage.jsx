import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const HomePage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Главная страница
            </Typography>
            <nav>
                <Button variant="contained" color="primary" component={Link} to="/converter" style={{ margin: '10px' }}>
                    Перейти к температурному конвертеру
                </Button>
                <Button variant="contained" color="secondary" component={Link} to="/todo" style={{ margin: '10px' }}>
                    Перейти к списку дел
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/products" style={{ margin: '10px' }}>
                    Управление продуктами
                </Button>
                <Button variant="contained" color="secondary" component={Link} to="/about" style={{ margin: '10px' }}>
                    Перейти на страницу "О нас"
                </Button>
            </nav>
        </Container>
    );
};

export default HomePage;