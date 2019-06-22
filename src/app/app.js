import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/header";
import Footer from "./components/footer";
import Routes from "./routes";
import ScrollToTop from "./components/scrolltotop";
import Loader from "./components/common/loader";
import ErrorBoundary from "./components/errorBoundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <ScrollToTop>
          <div id="app">
            <ToastContainer />
            <Header />
            <div id="content" className="content">
              <div className="main">
                <Routes />
              </div>
              <Loader />
              <Footer />
            </div>
          </div>
        </ScrollToTop>
      </ErrorBoundary>
    );
  }
}

export default App;
