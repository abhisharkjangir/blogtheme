import { connect } from "react-redux";
import Loader from "./loader";
import { createStructuredSelector } from "reselect";
import {
  makeSelectLoaderValue,
  makeSelectLoaderMessage
} from "./loaderSelectors";

const mapStateToProps = createStructuredSelector({
  value: makeSelectLoaderValue(),
  message: makeSelectLoaderMessage()
});

export default connect(
  mapStateToProps,
  null
)(Loader);
