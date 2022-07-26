const TMDB_API_KEY = '7ae4517f797331ee85f8d637ed8e0fbd'

export default {
  fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
  fetchComedeyMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
  fetchUpcoming: `movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchPopular: `movie/popular?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchLatest: `movie/latest?api_key=${TMDB_API_KEY}&language=en-US`,
}
