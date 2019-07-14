import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TodaysSpotlight from "../../components/todaysSpotlight";
import {
  selectTodaysSpolightBlogsIsFetching,
  selectTodaysSpolightBlogsList,
  selectTodaysSpolightBlogsError
} from "./todaysSpotlightSelectors";
import { fetchTodaySpotlight } from "./todaysSpotlightActions";

const mapStateToProps = createStructuredSelector({
  todaysSpotlightIsFetching: selectTodaysSpolightBlogsIsFetching,
  todaysSpotlightList: selectTodaysSpolightBlogsList,
  todaysSpotlightError: selectTodaysSpolightBlogsError
});

const mapDispatchToProps = dispatch => ({
  fetchTodaysSpotlight: () => dispatch(fetchTodaySpotlight())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodaysSpotlight);
