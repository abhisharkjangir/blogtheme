import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

import { Container, Col, Row } from "../layout";
import logo from "../../assets/imgs/logo.png";
import Typehead from "../typehead/typehead";

const NAVIGATION = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "Categories",
    to: "#"
  },
  {
    name: "Trending",
    to: "/trending"
  },
  {
    name: "Featured",
    to: "/featured"
  },
  {
    name: "Bookmarks",
    to: "/bookmarks"
  }
];

class Header extends React.PureComponent {
  renderLogo = () => {
    return (
      <Col lg={2}>
        <img src={logo} width="105px" alt="logo" />
      </Col>
    );
  };

  renderTypehead = () => {
    return (
      <Col lg={5}>
        <Typehead />
      </Col>
    );
  };

  renderNavigation = () => {
    return (
      <Col lg={5}>
        <div className="navigation">
          <ul>
            {NAVIGATION.map(nav => (
              <li key={nav.name}>
                <Link to={nav.to}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Col>
    );
  };

  render() {
    return (
      <header className="header">
        <Container>
          <Row>
            {this.renderLogo()}
            {this.renderNavigation()}
            {this.renderTypehead()}
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
