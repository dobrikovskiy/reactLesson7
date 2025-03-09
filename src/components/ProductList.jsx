import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../redux/productsSlice';
import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    Button,
    Typography,
    Container,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Список продуктов
            </Typography>

            {/* Кнопка для добавления нового продукта */}
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/products/add"
                style={{ marginBottom: '20px' }}
            >
                Добавить новый продукт
            </Button>

            {/* Список продуктов */}
            <List>
                {products.map((product) => (
                    <ListItem
                        key={product.id}
                        secondaryAction={
                            <>
                                {/* Кнопка редактирования */}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component={Link}
                                    to={`/products/edit/${product.id}`}
                                    style={{ marginRight: '10px' }}
                                >
                                    Редактировать
                                </Button>

                                {/* Кнопка удаления */}
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => dispatch(deleteProduct(product.id))}
                                >
                                    <DeleteIcon />
                                </IconButton>

                                {/* Кнопка переключения доступности */}
                                <Button
                                    variant="contained"
                                    color={product.available ? 'secondary' : 'primary'}
                                    onClick={() => dispatch(toggleAvailability(product.id))}
                                    style={{ marginLeft: '10px' }}
                                >
                                    {product.available ? 'Сделать недоступным' : 'Сделать доступным'}
                                </Button>
                            </>
                        }
                    >
                        <ListItemText
                            primary={product.name}
                            secondary={`${product.description} - ${product.price} руб. (${product.available ? 'Доступен' : 'Недоступен'
                                })`}
                        />
                    </ListItem>
                ))}
            </List>

            {/* Кнопки для навигации */}
            <nav style={{ marginTop: '20px' }}>
                <Button variant="contained" color="primary" component={Link} to="/" style={{ margin: '10px' }}>
                    На главную
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/about" style={{ margin: '10px' }}>
                    О нас
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/converter" style={{ margin: '10px' }}>
                    Температурный конвертер
                </Button>
                <Button variant="contained" color="primary" component={Link} to="/todo" style={{ margin: '10px' }}>
                    Список дел
                </Button>
            </nav>
        </Container>
    );
};

export default ProductList;