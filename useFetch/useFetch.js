import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    // Es buena práctica meter las peticiones HTTP dentro de un useEffect para que al redibujarse no
    // vuelvan a hacerse sucesivas peticiones a la misma información
    getFetch();
  }, [url]);

  // Función que setea el estado "Cargando"
  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  // Función que actualiza el estado con los datos.
  const getFetch = async () => {
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    setLoadingState();
    const resp = await fetch(url);

    //Sleep
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Si error:
    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    // Guardar en caché
    localCache[url] = data;

    console.log(localCache);
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
