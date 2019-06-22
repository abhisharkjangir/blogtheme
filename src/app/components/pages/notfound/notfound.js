import React from "react";
import Page from "../../page";
import "./notfound.scss";
import Meta from "../../../constants/meta";
import LinkButton from "../../common/linkButton";

export default () => (
  <Page {...Meta.notfound} noCrawl>
    <div className="notfound-page">
      <div className="box">
        <h2>404</h2>
        <p>This is not the web page you are looking for.</p>
      </div>
      <LinkButton to="/" label="GO BACK TO HOME" />
    </div>
  </Page>
);
