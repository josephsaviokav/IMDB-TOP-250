const API_KEY = "0b45768043msh8bce770d36ce6efp184cdajsne6dd3c30f645";
const BASE_URL = "https://imdb236.p.rapidapi.com";

const HEADERS = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": "imdb236.p.rapidapi.com"
};

// Fetch Top 250 Movies
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/api/imdb/top250-movies`, {
    method: 'GET',
    headers: HEADERS
  });
  const data = await response.json();
  return data;
};

// Search Movies by Title
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/api/imdb/search?title=${encodeURIComponent(query)}`, {
    method: 'GET',
    headers: HEADERS
  });
  const data = await response.json();
  return data;
};
