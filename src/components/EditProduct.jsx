import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../redux/productsSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const product = products.find((p) => p.id === parseInt(id));

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(true);

    useEffect(() => {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setAvailable(product.available);
        }
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({
                id: parseInt(id),
                name,
                description,
                price: parseFloat(price),
                available,
            })
        );
        navigate('/products'); // Перенаправление на страницу списка продуктов
    };

    if (!product) {
        return <Typography variant="h6">Продукт не найден</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Редактировать продукт
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
                    Сохранить изменения
                </Button>
            </form>
        </Container>
    );
};

export default EditProduct;