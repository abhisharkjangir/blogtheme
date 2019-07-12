import React from "react";
import "./topcategories.scss";
import BorderHeading from "../borderHeading/borderHeading";
import { Row, Col } from "../layout";
import SmallBlogCard from "../smallBlogCard";
import SlickSlider from "../slider/slider";
import LargeBlogCard from "../largeBlogCard/largeBlogCard";
import FullImgBlogCard from "../fullmgBlogCard/fullmgBlogCard";

class TopCategories extends React.PureComponent {
  renderSkeleton = () => {
    const cards = [1, 2, 3, 4, 5, 6];
    return (
      <React.Fragment>
        <BorderHeading text="Top Categories" />
        <Row>
          {cards.slice(0, 2).map(blog => (
            <Col key={blog} className="p-0" lg={6}>
              <div className="large-skeleton-card" />
            </Col>
          ))}

          {cards.slice(0, 6).map(blog => (
            <Col key={blog} className="p-0" lg={6}>
              <div className="small-skeleton-card" />
            </Col>
          ))}
          {cards.slice(0, 1).map(blog => (
            <Col key={blog} className="p-0" lg={12}>
              <div className="full-img-skeleton-card" />
            </Col>
          ))}
        </Row>
      </React.Fragment>
    );
  };

  render() {
    const {
      trendingBlogsIsFetching,
      trendingBlogList,
      categoryList
    } = this.props;
    if (trendingBlogsIsFetching && trendingBlogList.length === 0)
      return this.renderSkeleton();
    return (
      <div className="top-categories">
        <BorderHeading text="Top Categories" />
        <Row className="m-0 p-0">
          {trendingBlogList.slice(0, 2).map(blog => (
            <Col className="p-0" lg={6}>
              <LargeBlogCard blog={blog} showDescription />
            </Col>
          ))}
          {trendingBlogList.slice(3, 7).map(blog => (
            <Col className="p-0" lg={6}>
              <SmallBlogCard blog={blog} showDetail categories={categoryList} />
            </Col>
          ))}
          <Col lg={12} className="p-0">
            <SlickSlider merge={{ dots: false, slidesToShow: 1, slidesToScroll: 1}}>
              {trendingBlogList.slice(8, trendingBlogList.length).map(blog => (
                <FullImgBlogCard blog={blog} categories={categoryList} showAuthor/>
              ))}
            </SlickSlider>
          </Col>
        </Row>
      </div>
    );
  }
}
export default TopCategories;
