import React, { useState } from "react";

const Search = (props) => {
  // state = {
  //   search: "",
  //   type: "all",
  // };
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const onChangeInputHandler = (e) => {
    // this.setState({ search: e.target.value });
    setSearch(e.target.value);
  };

  const onChangeRadioHandler = (e) => {
    // this.setState({ type: e.target.dataset.type });
    setType(e.target.dataset.type);
  };

  const onKeyDownHandler = (e) => {
    if (e.code === "Enter") {
      handleFilter();
    }
  };

  const handleFilter = () => {
    props.searchMovies(search, type);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          placeholder="search"
          value={search}
          id="search"
          type="search"
          className="validate"
          onChange={onChangeInputHandler}
          onKeyDown={onKeyDownHandler}
        />
        <button
          onClick={handleFilter}
          className="btn btn-small waves-effect waves-light search-btn"
          type="submit"
          name="action"
        >
          Search
        </button>
      </div>
      <div className="radios col s12">
        <p>
          <label>
            <input
              data-type="all"
              class="with-gap"
              name="type"
              type="radio"
              checked={type === "all"}
              onChange={onChangeRadioHandler}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              class="with-gap"
              data-type="movie"
              name="type"
              type="radio"
              checked={type === "movie"}
              onChange={onChangeRadioHandler}
            />
            <span>Movies</span>
          </label>
        </p>
        <p>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="series"
              checked={type === "series"}
              onChange={onChangeRadioHandler}
            />
            <span>Series</span>
          </label>
        </p>
      </div>
    </div>
  );
};

export default Search;
