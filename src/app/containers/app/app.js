import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import App from "../../components/app";
import WithLocalStorage from "../../components/withLocalStorage";
import { fetchCategory } from "./appActions";
import {
  selectCategoryIsFetching,
  selectCategoryList,
  selectCategoryError
} from "./appSelectors";

const mapStateToProps = createStructuredSelector({
  categoryIsFetching: selectCategoryIsFetching,
  categoryList: selectCategoryList,
  categoryError: selectCategoryError
});

const mapDispatchToProps = dispatch => ({
  fetchCategory: () => dispatch(fetchCategory())
});

export default WithLocalStorage(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
);
