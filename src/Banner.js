import React from "react";
import "./Banner.css";
import requests from "./request";
import { baseUrlImg } from "./request";

const Banner = () => {
  const [movie, setMovie] = React.useState({});
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(requests.fetchNetflixOriginals);
      const request = await response.json();
      const movies = request.results;
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return `${str.substring(0, n - 1)}...`;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${baseUrlImg}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <h1 className="banner-title">
        {movie?.name || movie?.title || movie?.original_name}
      </h1>
      <div className="banner-buttons">
        <button className="banner-btn">Play</button>
        <button className="banner-btn">My List</button>
      </div>
      <article className="description">
        {movie?.overview > 200
          ? truncate(movie?.overview, 200)
          : movie?.overview}
      </article>
      <div className="banner-fade"></div>
    </header>
  );
};

export default Banner;
