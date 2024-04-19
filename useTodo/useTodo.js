import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  // Cuando cambia `todos` se guarda en localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Función que maneja la acción de crear nuevo `todo` (disparada cuando se hace submit en el formulario)
  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: id,
    };
    dispatch(action);
  };

  const handleToogleTodo = (id) => {
    const action = {
      type: '[TODO] Toogle Todo',
      payload: id,
    };
    dispatch(action);
  };

  return {
    todos,
    handleDeleteTodo,
    handleToogleTodo,
    handleNewTodo,
  };
};
