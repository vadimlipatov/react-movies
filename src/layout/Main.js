import React, { Component } from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import Preloader from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    this.searchMovies("matrix");
  }

  searchMovies = (search, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.Response === "True") {
          this.setState({ movies: response.Search, loading: false });
        } else {
          this.setState({ movies: [], loading: false });
        }
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="content container">
        <Search searchMovies={this.searchMovies} />

        {!loading ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;
