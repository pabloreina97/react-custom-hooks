# ⚛️ Custom hooks

Repositorio de hooks de React personalizados

- **`useCounter`**: hook que consta de un `useState` que almacena el estado de un contador.

- **`useFetch`**: hook que gestiona peticiones HTTP. Consta de un `useState` que almacena el estado de la petición (data, isLoading, error...), dos métodos para setear el estado de "Cargando" y para setear la data obtenida en el estado, un `useEffect` para evitar las sucesivas peticiones al redibujarse el componente donde se utiliza, y una variable para almacenar los datos obtenidos en la caché local y evitar peticiones a un mismo recurso.

- **`useForm`**: hook que consta de un `useState` que almacena el estado de un formulario.

- **`useTodo`**: hook que gestiona el CRUD de una app de lista de tareas, con `useReducer`.