export const todoReducer = (initialState = [], action) => {
  // Es como un useState para objetos complejos, donde está más o menos claramente definido el CRUD
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];

    case '[TODO] Remove Todo':
      return initialState.filter((todo) => todo.id !== action.payload);

    case '[TODO] Toogle Todo':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
