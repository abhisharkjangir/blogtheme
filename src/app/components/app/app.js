import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Header from "../header";
import Footer from "../footer";
import Routes from "../../routes";
import ScrollToTop from "../scrolltotop";
import Loader from "../common/loader";
import ErrorBoundary from "../errorBoundary";

class App extends Component {
  componentDidMount() {
    const {
      categoryIsFetching,
      categoryList,
      fetchCategory,
      fetchTrendingBlogs,
      trendingBlogList,
      trendingBlogsIsFetching
    } = this.props;
    if (!categoryIsFetching && categoryList.length === 0) {
      fetchCategory();
    }
    if (!trendingBlogsIsFetching && trendingBlogList.length === 0) {
      fetchTrendingBlogs();
    }
  }

  render() {
    return (
      <ErrorBoundary>
        <ScrollToTop>
          <div id="app">
            <ToastContainer />
            <Header />
            <div id="content" className="content">
              <Routes />
            </div>
            <Footer />
          </div>
          <Loader />
        </ScrollToTop>
      </ErrorBoundary>
    );
  }
}

export default App;
