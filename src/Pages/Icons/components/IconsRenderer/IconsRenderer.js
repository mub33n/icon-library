import React from "react";
import propTypes from "prop-types";
import styles from "./styles";
import Loader from "../../../../Loaders/Loader.gif";

const IconsRenderer = ({ totalAmount, icons, push, loading }) => {
  if (loading) {
    return (
      <div style={styles.loader}>
        <img src={Loader} alt="loading..." />
        <div>Rendering...</div>
      </div>
    );
  }
  return (
    <>
      <div style={styles.container}>
        {icons.map((icon) => (
          <div>
            <div
              role="presentation"
              style={styles.child}
              onKeyDown={() =>
                push(`/details/${icon.title}`, { name: icon.import })
              }
              onClick={() =>
                push(`/details/${icon.title}`, { name: icon.import })
              }
            >
              <icon.src width="50px" height="50px" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

IconsRenderer.propTypes = {
  totalAmount: propTypes.number.isRequired,
  icons: propTypes.instanceOf(Array).isRequired,
  push: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
};

export default IconsRenderer;
