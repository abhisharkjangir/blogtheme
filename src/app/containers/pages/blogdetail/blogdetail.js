import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import BlogDetail from "../../../components/pages/blogdetail/blogdetail";
import { fetchBlogDeatil, resetBlogDetail } from "./blogdetailActions";
import {
  selectBlogDetailIsFetching,
  selectBlogDetail,
  selectBlogDetailError
} from "./blogdetailSelectors";
import { selectCategoryIsFetching, selectCategoryList, selectCategoryError } from "../../app/appSelectors";

const mapStateToProps = createStructuredSelector({
  blogDetailIsFetching: selectBlogDetailIsFetching,
  blogDetail: selectBlogDetail,
  blogDetailError: selectBlogDetailError,
  categoryIsFetching: selectCategoryIsFetching,
  categoryList: selectCategoryList,
  categoryError: selectCategoryError,
});

const mapDispatchToProps = dispatch => ({
  fetchBlogDetail: blogId => dispatch(fetchBlogDeatil(blogId)),
  resetBlogDetail: () => dispatch(resetBlogDetail())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDetail);
