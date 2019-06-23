import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import App from "../../components/app";
import WithLocalStorage from "../../components/withLocalStorage";
import { fetchCategory, fetchTrendingBlogs } from "./appActions";
import {
  selectCategoryIsFetching,
  selectCategoryList,
  selectCategoryError,
  selectTrendingBlogsIsFetching,
  selectTrendingBlogsList,
  selectTrendingBlogsError
} from "./appSelectors";

const mapStateToProps = createStructuredSelector({
  categoryIsFetching: selectCategoryIsFetching,
  categoryList: selectCategoryList,
  categoryError: selectCategoryError,
  trendingBlogsIsFetching: selectTrendingBlogsIsFetching,
  trendingBlogList: selectTrendingBlogsList,
  trendingBlogsError: selectTrendingBlogsError
});

const mapDispatchToProps = dispatch => ({
  fetchCategory: () => dispatch(fetchCategory()),
  fetchTrendingBlogs: () => dispatch(fetchTrendingBlogs())
});

export default WithLocalStorage(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
);
