import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  onChangeInputHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  onChangeRadioHandler = (e) => {
    this.setState({ type: e.target.dataset.type });
  };

  onKeyDownHandler = (e) => {
    if (e.code === "Enter") {
      this.handleFilter();
    }
  };

  handleFilter = () => {
    this.props.searchMovies(this.state.search, this.state.type);
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="search"
            value={this.state.search}
            id="search"
            type="search"
            className="validate"
            onChange={this.onChangeInputHandler}
            onKeyDown={this.onKeyDownHandler}
          />
          <button
            onClick={this.handleFilter}
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
                checked={this.state.type === "all"}
                onChange={this.onChangeRadioHandler}
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
                checked={this.state.type === "movie"}
                onChange={this.onChangeRadioHandler}
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
                checked={this.state.type === "series"}
                onChange={this.onChangeRadioHandler}
              />
              <span>Series</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}

export default Search;
