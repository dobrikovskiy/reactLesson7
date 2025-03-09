import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Container,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const TodoList = () => {
  // Загрузка задач из localStorage при монтировании компонента
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Сохранение задач в localStorage при их изменении
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Список дел
      </Typography>
      <TextField
        label="Новая задача"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Добавить задачу
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteTask(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={task} />
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
        <Button variant="contained" color="primary" component={Link} to="/products" style={{ margin: '10px' }}>
          Управление продуктами
        </Button>
      </nav>
    </Container>
  );
};

export default TodoList;