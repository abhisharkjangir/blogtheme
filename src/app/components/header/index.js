import React from "react";
import "./header.scss";
import { Container } from "../layout";
import logo from "../../assets/imgs/logo.png";
class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <Container>
          <img src={logo} width="105px" alt="logo" />
        </Container>
      </header>
    );
  }
}

export default Header;
