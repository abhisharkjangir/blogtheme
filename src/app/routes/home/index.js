import React from "react";
import "./home.scss";
import Page from "../../components/page";
import Meta from "../../constants/meta";
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Page {...Meta.home}>
  hi
      </Page>
    );
  }
}

export default Home;
