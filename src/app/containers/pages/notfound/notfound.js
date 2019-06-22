import { connect } from "react-redux";
import NotFound from "../../../components/pages/notfound";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({});

export default connect(
  mapStateToProps,
  null
)(NotFound);
