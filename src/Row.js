import React from "react";
import { baseUrlImg } from "./request";
import { Link } from "react-router-dom";

const Row = ({ title, fetchUrl, isThumbnail, getMovieClicked }) => {
  const [movies, setMovies] = React.useState([]);
  const [moviesName, setMoviesName] = React.useState([]);
  const moviesNameUnstate = movies.map((movie) => {
    return {
      title: movie.name || movie.title || movie.original_name,
      id: movie.id,
      showName: false,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      overview: movie.overview,
      voteAverage: movie.vote_average,
    };
  });
  React.useEffect(() => {
    setMoviesName(moviesNameUnstate);
  }, [movies]);
  // console.log(movies);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(fetchUrl);
      const request = await response.json();
      setMovies(request.results);
    }
    fetchData();
  }, [fetchUrl]);

  const trackingId = (id) => {
    setMoviesName((oldMoviesName) =>
      oldMoviesName.map((oldMovie) => {
        return oldMovie.id === id
          ? { ...oldMovie, showName: !oldMovie.showName }
          : { ...oldMovie };
      })
    );
  };

  return (
    <div className="movies-container">
      <h2>{title}</h2>
      <div className="movies-poster">
        {moviesName.map((movie) => (
          <div className="movie-name-img" key={movie.id}>
            <Link to={`/${movie.title}`}>
              <img
                className={isThumbnail ? "movie-backdrop" : "movie-poster"}
                src={`${baseUrlImg}${
                  isThumbnail ? movie.backdrop_path : movie.poster_path
                }`}
                alt={movie.title}
                onMouseOver={() => trackingId(movie.id)}
                onMouseLeave={() => trackingId(movie.id)}
                onClick={() => getMovieClicked(movie)}
              />
            </Link>
            {movie.showName ? (
              <p className="movie-name-modal" style={{ visibility: "visible" }}>
                {movie.title}
              </p>
            ) : (
              <p className="movie-name-modal" style={{ visibility: "hidden" }}>
                {movie.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
