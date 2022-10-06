import React from "react";
import Loader1 from "../../Loaders/1.gif";
import Loader2 from "../../Loaders/2.gif";
import Loader3 from "../../Loaders/3.gif";
import Loader4 from "../../Loaders/4.gif";
import styles from "./styles";

class Loaders extends React.Component {
  state = {
    selected: 1,
  };

  render() {
    const { selected } = this.state;
    let icon = Loader1;
    switch (selected) {
      case 1:
        icon = Loader1;
        break;
      case 2:
        icon = Loader2;
        break;
      case 3:
        icon = Loader3;
        break;
      case 4:
        icon = Loader4;
        break;
      default:
        icon = Loader1;
        break;
    }
    return (
      <>
        <div style={styles.container}>
          <div style={styles.padding}>
            <img width={400} src={icon} alt="loader" />
          </div>
          <div style={styles.flex}>
            <button onClick={() => this.setState({ selected: 1 })}>
              Suitcase
            </button>
            <button onClick={() => this.setState({ selected: 2 })}>
              Aeroplane
            </button>
            <button onClick={() => this.setState({ selected: 3 })}>Cup</button>
            <button onClick={() => this.setState({ selected: 4 })}>
              Handshake
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Loaders;
