import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material'; // Импортируем компоненты Material UI

const AboutPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Страница "О нас"
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
                <Button variant="contained" color="secondary" component={Link} to="/" style={{ margin: '10px' }}>
                    Перейти на главную страницу
                </Button>
            </nav>
        </Container>
    );
};

export default AboutPage;