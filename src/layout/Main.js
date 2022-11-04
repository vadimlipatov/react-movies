import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import Preloader from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  // state = {
  //   movies: [],
  //   loading: true,
  // };

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (search = "matrix", type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.Response === "True") {
          // this.setState({ movies: response.Search, loading: false });
          setLoading(false);
          setMovies(response.Search);
        } else {
          // this.setState({ movies: [], loading: false });
          setLoading(false);
          setMovies([]);
        }
      })
      .catch((err) => {
        console.error(err);
        // this.setState({ loading: false });
        setLoading(false);
      });
  };

  useEffect(() => {
    searchMovies();
  }, []);

  // componentDidMount() {
  //   this.searchMovies("matrix");
  // }

  return (
    <main className="content container">
      <Search searchMovies={searchMovies} />

      {!loading ? <Movies movies={movies} /> : <Preloader />}
    </main>
  );
};

export default Main;
