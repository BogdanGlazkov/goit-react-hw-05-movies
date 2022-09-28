import axios from 'axios';
const API_KEY = 'b4aae86baf5bc9ee729e045fe7a7b511';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getTrending = async () => {
  try {
    const result = await axios.get(`${BASE_URL}trending/movie/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getSearchMovies = async query => {
  try {
    const result = await axios.get(`${BASE_URL}search/movie`, {
      params: {
        query,
        api_key: API_KEY,
      },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getMovieById = async (id, info = '') => {
  try {
    const result = await axios.get(`${BASE_URL}movie/${id}${info}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const API = {
  getMovieById,
  getTrending,
  getSearchMovies,
};
