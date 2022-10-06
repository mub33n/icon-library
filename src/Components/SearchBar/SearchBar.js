import React, { Component } from "react";
import { FiSearch } from "react-icons/fi";
import propTypes from "prop-types";
import styles from "./styles";

class SearchBar extends Component {
  render() {
    const { beginSearch } = this.props;
    return null;
  }
}

SearchBar.propTypes = {
  beginSearch: propTypes.func.isRequired,
};

export default SearchBar;
