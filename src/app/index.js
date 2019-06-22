import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "./app";
import WithLocalStorage from "./components/withLocalStorage";
import { createStructuredSelector } from "reselect";
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

const mapDispatchToProps = dispatch => {
  return {
    fetchCategory: () => dispatch(fetchCategory())
  };
};

export default WithLocalStorage(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
);
