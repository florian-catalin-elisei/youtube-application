import { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { submit } = props;
    submit(searchValue);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <i className="fa-solid fa-magnifying-glass"></i>

        <input
          type="text"
          name="searchBar"
          autoComplete="off"
          placeholder="What are you looking for?"
          onChange={handleChange}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
