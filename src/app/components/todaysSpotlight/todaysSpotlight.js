import React from "react";
import { Link } from "react-router-dom";
import "./todaysSpotlight.scss";
import { getBlogUrl, getTimeString } from "../../utils/common";
import BorderHeading from "../borderHeading/borderHeading";
import SlickSlider from "../slider/slider";
import Image from "../common/Image/image";
import Icon from "../icon/icon";

class TodaysSpotlight extends React.PureComponent {
  componentDidMount() {
    const {
      todaysSpotlightIsFetching,
      todaysSpotlightList,
      fetchTodaysSpotlight
    } = this.props;
    if (!todaysSpotlightIsFetching && todaysSpotlightList.length === 0) {
      fetchTodaysSpotlight();
    }
  }

  renderSkeleton = () => {
    const cards = [1, 2, 3, 4];
    return (
      <React.Fragment>
        <BorderHeading text="Today's Spotlight" />
        <SlickSlider
          merge={{ dots: false, slidesToShow: 3, slidesToScroll: 3 }}
        >
          {cards &&
            cards.map(card => (
              <div key={card} className="medium-skeleton-card" />
            ))}
        </SlickSlider>
      </React.Fragment>
    );
  };

  render() {
    const {
      todaysSpotlightIsFetching,
      todaysSpotlightList,
      slickSetting
    } = this.props;
    if (todaysSpotlightIsFetching && todaysSpotlightList.length === 0)
      return this.renderSkeleton();
    return (
      <div className="todays-spotlight">
        <BorderHeading text="Today's Spotlight" />
        <SlickSlider merge={{ ...slickSetting }}>
          {todaysSpotlightList &&
            todaysSpotlightList.map(blog => (
              <div key={blog._id} className="medium-blog-card">
                <Image src={blog.imageSrc} alt={blog.title} />
                <Link to={getBlogUrl(blog)} className="title">
                  {blog.title}
                </Link>
                <p className="detail text-muted">
                  {blog.author}, {getTimeString(blog.createdDate)}
                  <span className="mr-1 ml-2 border-right" />
                  <Icon name="clock" className="mr-1 ml-1" /> 3 min read
                </p>
              </div>
            ))}
        </SlickSlider>
      </div>
    );
  }
}
export default TodaysSpotlight;
