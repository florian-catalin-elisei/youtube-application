import { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ submit }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(searchValue);
  };

  return (
    <div className="SearchBar">
      <form className="SearchBar-form" onSubmit={handleSubmit}>
        <i className="fa-solid fa-magnifying-glass"></i>

        <input
          className="SearchBar-input"
          type="text"
          name="searchBar"
          autoComplete="off"
          placeholder="What are you looking for?"
          onChange={handleChange}
        />

        <button className="SearchBar-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
