import React, { Component } from "react";
import "./footer.scss";
import { Container } from "../layout";

class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    const { sidebar } = this.props;
    return (
      <footer className={sidebar ? "footer" : "footer-no-sidebar"}>
        <Container>
          Copyright © {year}{" "}
          <span className="float-right">
            Made with{" "}
            <span role="img" aria-label="heart">
              💖
            </span>{" "}
            by <a href="http://abhijangir.me">Abhishar Jangir.</a>
          </span>
        </Container>
      </footer>
    );
  }
}

export default Footer;
