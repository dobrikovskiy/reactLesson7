import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productsSlice';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Добавлен useNavigate

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Хук для навигации
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addProduct({
                name,
                description,
                price: parseFloat(price),
                available,
            })
        );
        setName('');
        setDescription('');
        setPrice('');
        setAvailable(true);
        navigate('/products'); // Перенаправление на страницу списка продуктов
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Добавить новый продукт
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Название"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Описание"
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Цена"
                    variant="outlined"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px' }}
                >
                    Добавить продукт
                </Button>
            </form>
        </Container>
    );
};

export default AddProduct;