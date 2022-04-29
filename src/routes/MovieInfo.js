import React from "react";
import { baseUrlImg } from "../request";
import "./MovieInfo.css";

const MovieInfo = ({ movie }) => {
  return (
    <div className="movie-info-container">
      <nav className="movie-title-rate">
        <h1 className="movie-title">{movie.title}</h1>
        <div className="imdb-section">
          <h5>IMDB Rating</h5>
          <h4 className="movie-rate">{movie.voteAverage}</h4>
        </div>
      </nav>
      <img
        src={`${baseUrlImg}${movie.backdrop_path}`}
        alt={movie.title}
        className="movie-poster-2"
      />
      <h3>Overview</h3>
      <hr />
      <p className="movie-overview">{movie.overview}</p>
    </div>
  );
};

export default MovieInfo;
