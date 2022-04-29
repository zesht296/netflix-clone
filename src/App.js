import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./routes/Mainpage";
import MovieInfo from "./routes/MovieInfo";

function App() {
  const [getMovie, setGetMovie] = React.useState({});
  const getMovieClicked = (movie) => {
    setGetMovie(movie);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Mainpage getMovieClicked={getMovieClicked} />}
        />
        <Route path=":userId" element={<MovieInfo movie={getMovie} />} />
      </Routes>
    </div>
  );
}

export default App;
