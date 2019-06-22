import { connect } from "react-redux";
import Header from "../../components/header";
import { createStructuredSelector } from "reselect";
import {
  selectCategoryList,
  selectCategoryIsFetching
} from "../../appSelectors";

const mapStateToProps = createStructuredSelector({
  categoryList: selectCategoryList,
  categoryIsFetching: selectCategoryIsFetching
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
