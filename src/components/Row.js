import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([])

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchURL])

  console.table(movies)
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container -> posters*/}
      <div className="row__posters">
        {/* several row__posters */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${imageBaseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
