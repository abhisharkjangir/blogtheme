import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Categories from "../../components/categories";

import {
  selectCategoryIsFetching,
  selectCategoryList,
  selectCategoryError,
} from "../app/appSelectors";

const mapStateToProps = createStructuredSelector({
  categoryIsFetching: selectCategoryIsFetching,
  categoryList: selectCategoryList,
  categoryError: selectCategoryError,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
