import React from "react";
import propTypes from "prop-types";
import SearchBar from "../../Components/SearchBar";
import styles from "./styles";
import FeatherIcons from "../../Imports/feather";
import IconsRenderer from "./components/IconsRenderer";

class Icons extends React.Component {
  state = {
    icons: [...FeatherIcons, ,],
    totalAmount: [...FeatherIcons].length,
    loading: false,
  };

  beginSearch = (search) => {
    if (search.length < 3) {
      return this.setState({
        icons: [...FeatherIcons],
      });
    }
    const iconList = [...FeatherIcons];
    const icons = iconList.filter((icon) =>
      icon.title.toLowerCase().includes(search.toLowerCase())
    );

    this.setState({ icons, loading: true });

    if (icons.length === 0) {
      return this.setState({ loading: false });
    }
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  };

  render() {
    const {
      history: { push },
    } = this.props;
    const { icons, loading, totalAmount } = this.state;
    console.log(icons);
    return (
      <>
        <div style={styles.logo}>
          <SearchBar beginSearch={this.beginSearch} />
          <div caption override={styles.padding}>
            {icons.length}
            {" Icons Available"}
          </div>
        </div>
        <IconsRenderer
          icons={icons}
          push={push}
          loading={loading}
          totalAmount={totalAmount}
        />
      </>
    );
  }
}

Icons.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};

export default Icons;
