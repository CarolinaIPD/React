import data from '../apis/datos.json';

export function useApi() {
  const movies = data.Search || [];
  const mappedApi = movies.map((movie) => ({
    id: movie.imdbID,
    image: movie.Poster,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
  }));
  return mappedApi;
}

/*export async function useApi(searchTerm) {
  try {
    const apiKey = '4287ad07'; // Reemplaza con tu propia clave de API
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
    const data = await response.json();

    if (data.Search) {
      return data.Search.map((movie) => ({
        id: movie.imdbID,
        image: movie.Poster,
        title: movie.Title,
        year: movie.Year,
        type: movie.Type,
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}*/