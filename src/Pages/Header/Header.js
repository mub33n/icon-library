import React from "react";
import Typing from "react-typing-animation";
import propTypes from "prop-types";
import styles from "./styles";

class Header extends React.Component {
  state = { path: "" };

  onPress = (path) => {
    const {
      history: { push },
    } = this.props;
    this.setState({ path });
    push(path);
  };

  render() {
    const {
      history: {
        location: { pathname },
      },
    } = this.props;
    return (
      <div style={styles.icon}>
        <div style={styles.text}>
          <Typing speed={150}>[MUBEANS ICON LIBRARY]</Typing>
        </div>
        <div style={styles.container}>
          <button
            onClick={() => this.onPress("/")}
            secondary={pathname !== "/"}
          >
            ICONS
          </button>
          <button
            onClick={() => this.onPress("/loaders")}
            secondary={pathname !== "/loaders"}
          >
            LOADERS
          </button>
          <button
            onClick={() => this.onPress("/theme")}
            secondary={pathname !== "/theme"}
          >
            THEME
          </button>
          <button
            onClick={() => this.onPress("/create")}
            secondary={pathname !== "/create"}
          >
            CREATE
          </button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  history: propTypes.shape({
    location: propTypes.shape({
      pathname: propTypes.string,
    }),
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Header;
