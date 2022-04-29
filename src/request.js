const APIkey = "253532f9779d1d11aabd6730f93df072";
const baseUrl = "https://api.themoviedb.org/3";
export const baseUrlImg = "https://image.tmdb.org/t/p/original";

const requests = {
  fetchTrending: `${baseUrl}/trending/all/week?api_key=${APIkey}&language=en_US`,
  fetchNetflixOriginals: `${baseUrl}/discover/tv?api_key=${APIkey}&with_networks=213`,
  fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${APIkey}&language=en-US`,
  fetchActionMovies: `${baseUrl}/discover/movie?api_key=${APIkey}&with_genres=28`,
  fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${APIkey}&with_genres=35`,
  fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${APIkey}&with_genres=27`,
  fetchRomanceMovies: `${baseUrl}/discover/movie?api_key=${APIkey}&with_genres=10749`,
  fetchDocumentaries: `${baseUrl}/discover/movie?api_key=${APIkey}&with_genres=99`,
};

export default requests;
