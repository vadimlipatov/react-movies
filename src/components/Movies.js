import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
  const { movies } = props;
  return (
    <div className="movies">
      {movies.length
        ? movies.map((item) => {
            return <Movie key={item.imdbID} {...item} />;
          })
        : "No movies find"}
    </div>
  );
};

export default Movies;
