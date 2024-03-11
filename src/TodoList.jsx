import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';
// const initialTodos = [
//   { id: 1, text: 'drink water', completed: true },
//   { id: 2, text: 'drink coffee', completed: true },
//   { id: 3, text: 'drink apple juice', completed: true },
//   { id: 4, text: 'drink tea', completed: true },
//   { id: 5, text: 'drink lemon juice', completed: true },
// ];

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem('todos'));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((oldTodos) =>
      oldTodos.filter((todos) => {
        return todos.id !== id;
      })
    );
  };

  const toggleTodo = (id) => {
    setTodos((oldTodos) => {
      return oldTodos.map((todos) => {
        if (todos.id == id) {
          return { ...todos, completed: !todos.completed };
        } else {
          return todos;
        }
      });
    });
  };
  const addTodo = (text) => {
    setTodos((oldTodos) => {
      return [...oldTodos, { text: text, id: crypto.randomUUID(), completed: false }];
    });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        m: 3,
      }}
    >
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
          return <ToDoItem todo={todo} key={todo.id} remove={removeTodo} toggle={toggleTodo} />;
        })}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
