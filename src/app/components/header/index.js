import { connect } from "react-redux";
import Header from "./header";
import { setAppData } from "../../appActions";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  });

const mapDispatchToProps = dispatch => ({
  setAppData: data => dispatch(setAppData(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
