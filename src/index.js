import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Api key : 253532f9779d1d11aabd6730f93df072
// example api request : https://api.themoviedb.org/3/movie/550?api_key=253532f9779d1d11aabd6730f93df072
// Api read access token : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTM1MzJmOTc3OWQxZDExYWFiZDY3MzBmOTNkZjA3MiIsInN1YiI6IjYyNTY4NTI4N2FkMDhjMDA5ZjkwMzZlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f7E8qt4FbYkC5fe2PSF8zWLj2WfjtFTDarddWqw4R4Q
