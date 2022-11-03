import React from "react";

const Movie = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: img,
  } = props;
  return (
    <div id={id} className="col s6 m3">
      <div className="card">
        <div className="card-image">
          {img === "N/A" ? (
            <img
              src={`https://via.placeholder.com/300x400?text=${title}`}
              alt="poster"
            />
          ) : (
            <img src={img} alt="poster" />
          )}
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>
            {year} <span className="right">{type}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
