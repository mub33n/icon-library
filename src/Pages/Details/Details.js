import React from "react";
import propTypes from "prop-types";
import FeatherIcons from "../../Imports/feather";
import styles from "./styles";

const Details = ({
  location: {
    state: { name },
  },
}) => {
  const icons = [...FeatherIcons];
  const icon = icons.find((el) => el.import === name);
  return (
    <>
      <div style={styles.container}>
        <div>
          <div headline primaryColor>
            {icon.title.replace(/([A-Z])/g, " $1").trim()}
          </div>
          <div override={styles.padding}>
            {"Created By "}
            <div override={styles.inline} bold primaryColor>
              {icon.author}
            </div>
          </div>
          <div override={styles.padding}>
            {"Icon Import Name "}
            <div override={styles.inline} bold primaryColor>
              {icon.import}
            </div>
          </div>
          <div>Tags</div>
          <div styles={styles.padding}>
            <div primaryColor caption>
              {icon.tags}
            </div>
          </div>
          <div override={styles.top}>Embed</div>
          <div style={styles.box}>
            <div bold primaryColor>
              import
              {" { "}
              {icon.import}
              {" } "}
              from pk-ui-icons;
            </div>
          </div>
        </div>
        <div style={styles.iconContainer}>
          <div style={styles.icon}>
            <icon.src width="200px" height="200px" />
          </div>
        </div>
      </div>
    </>
  );
};

Details.propTypes = {
  name: propTypes.string.isRequired,
  location: propTypes.shape({
    state: propTypes.shape({}),
  }).isRequired,
};

export default Details;
