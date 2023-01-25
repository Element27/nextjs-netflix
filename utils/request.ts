const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const fetchTrending = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;
const fetchNetflixOriginals = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`;
const fetchTopRated = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
const fetchActionMovies = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`;
const fetchComedyMovies = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`;
const fetchHorrorMovies = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`;
const fetchRomanceMovies = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`;
const fetchDocumentaries = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`;

const requests = {
  fetchTrending,
  fetchNetflixOriginals,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
};
export default requests;
