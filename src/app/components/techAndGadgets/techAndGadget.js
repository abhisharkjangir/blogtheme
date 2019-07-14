import React from "react";
import "./techAndGadget.scss";
import BorderHeading from "../borderHeading/borderHeading";
import SlickSlider from "../slider/slider";
import FullImgBlogCard from "../fullmgBlogCard/fullmgBlogCard";

class TechAndGadgets extends React.PureComponent {
  renderSkeleton = () => {
    const cards = [1, 2, 3, 4];
    return (
      <React.Fragment>
        <BorderHeading text="Tech & Gadgets" />
        <SlickSlider
          merge={{ dots: false, slidesToShow: 4, slidesToScroll: 3 }}
        >
          {cards &&
            cards.map(card => (
              <div key={card} className="full-img-skeleton-card" />
            ))}
        </SlickSlider>
      </React.Fragment>
    );
  };

  render() {
    const {
      trendingBlogsIsFetching,
      trendingBlogList,
      slickSetting,
      categoryList
    } = this.props;
    if (trendingBlogsIsFetching && trendingBlogList.length === 0)
      return this.renderSkeleton();
    return (
      <div className="todays-spotlight">
        <BorderHeading text="Tech & Gadgets" />
        <SlickSlider merge={{ ...slickSetting }}>
          {trendingBlogList &&
            trendingBlogList.map(blog => (
              <div key={blog._id} className="p-1">
                <FullImgBlogCard categories={categoryList} blog={blog} />
              </div>
            ))}
        </SlickSlider>
      </div>
    );
  }
}
export default TechAndGadgets;
