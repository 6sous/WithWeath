import React from "react";
import "../styles/SearchInput.scss";

function SearchInput({
  nameAttribute,
  value,
  handleSearch,
  handleKeyPress,
  handleClick,
  placeholder,
}) {
  return (
    <label htmlFor={nameAttribute} className="searchLabel">
      <input
        type="search"
        placeholder={placeholder}
        name={nameAttribute}
        className="searchInput"
        value={value}
        onChange={handleSearch}
        onKeyDown={handleKeyPress}
      />
      <button type="button" onClick={handleClick}>
        <i className="fi fi-br-search" />
      </button>
    </label>
  );
}

export default SearchInput;
