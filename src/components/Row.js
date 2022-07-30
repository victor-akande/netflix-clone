import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'
import  YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('');

  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '').then((url) => {
        const urlVidId = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlVidId.get('v'));
        console.log(url, urlVidId);

      }).catch(err => console.error(err))
    }
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchURL])

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
            onClick = {() => handleClick(movie)}
            className="row__poster"
            src={`${imageBaseUrl}${movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
