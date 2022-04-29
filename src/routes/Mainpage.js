import React from "react";
import Row from "../Row";
import requests from "../request";
import Banner from "../Banner";
import Navbar from "../Navbar";

const Mainpage = ({ getMovieClicked }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isThumbnail={false}
        getMovieClicked={getMovieClicked}
      />
      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        isThumbnail={true}
        getMovieClicked={getMovieClicked}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isThumbnail={true}
        getMovieClicked={getMovieClicked}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isThumbnail={true}
        getMovieClicked={getMovieClicked}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isThumbnail={true}
        getMovieClicked={getMovieClicked}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isThumbnail={true}
        getMovieClicked={getMovieClicked}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isThumbnail={true}
        getMovieClicked={getMovieClicked}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isThumbnail={true}
        getMovieClicked={getMovieClicked}
      />
    </>
  );
};

export default Mainpage;
