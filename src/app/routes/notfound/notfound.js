import React from "react";
import Page from "../../components/page";
import "./notfound.scss";
import Meta from "../../constants/meta";
import LinkButton from '../../components/common/linkButton';
import { LOGO } from '../../assets/imgs';

export default ({isLoggedIn}) => (
  <Page {...Meta.notfound} noCrawl>
    <div className={isLoggedIn ? 'notfound-page logged-in' : 'notfound-page'}>
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div className='box'>
        <h2>404</h2>
        <p>This is not the web page you are looking for.</p>
      </div>
      <LinkButton to={isLoggedIn? '/' : '/login'} label={isLoggedIn ? 'GO BACK TO HOME' : 'GO BACK TO LOGIN'}/>
    </div>
  </Page>
);
