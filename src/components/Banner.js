import { React, useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";
import { UilPlay, UilInfoCircle } from "@iconscout/react-unicons";

function Banner() {
  const [movie, setMovie] = useState([]);
  //   const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomNum = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomNum]);
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie.origanl_name}
          </h1>

          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>

          <div className="banner__buttons">
            <button className="banner__button" id="play">
              <span>
                <UilPlay size={13} />
              </span>
              Play
            </button>
            <button className="banner__button" id="info">
              <span>
                <UilInfoCircle size={13} />
              </span>
              More Info
            </button>
          </div>
        </div>
        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
}

export default Banner;
