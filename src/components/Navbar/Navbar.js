import { useState } from "react";
import Input from "../Input/Input";
import "./Navbar.css";
import Button from "../Button/Button";
import { getImages } from "../../services/getImages";

const Navbar = () => {
  const [searchedValue, setSearchedValue] = useState("");

  const onSearchChange = (e) => {
    setSearchedValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchedValue) getImages(1, searchedValue);
  };

  return (
    <nav className="navbar">
      <div className="logo">PhotoFy</div>
      <div className="search-box">
        <Input
          classNames="search"
          value={searchedValue}
          onChange={onSearchChange}
          placeholder="Please search an image"
        />
        <Button
          disabled={!searchedValue}
          onClick={handleSearchClick}
          classNames="search-btn"
        >
          Search
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
