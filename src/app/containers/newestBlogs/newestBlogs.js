import { connect } from "react-redux";
import NewestBlogs from "../../components/newestBlogs";
import { createStructuredSelector } from "reselect";
import {
  selectCategoryIsFetching,
  selectCategoryList,
  selectCategoryError,
  selectTrendingBlogsIsFetching,
  selectTrendingBlogsList,
  selectTrendingBlogsError
} from "../app/appSelectors";

const mapStateToProps = createStructuredSelector({
  categoryIsFetching: selectCategoryIsFetching,
  categoryList: selectCategoryList,
  categoryError: selectCategoryError,
  trendingBlogsIsFetching: selectTrendingBlogsIsFetching,
  trendingBlogList: selectTrendingBlogsList,
  trendingBlogsError: selectTrendingBlogsError
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewestBlogs);
