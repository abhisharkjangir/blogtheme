import React from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../errorBoundary";
import { Row, Col } from "../layout";
import "./sliderGrid.scss";
import Icon from "../icon/icon";
import SlickSlider from "../slider/slider";
import SmallBlogCard from "../smallBlogCard";
import {
  getCategoryDataFromBlog,
  getBlogUrl,
  getCategoryUrl
} from "../../utils/common";

class SliderGrid extends React.PureComponent {
  renderSmallTile = blog => {
    const category = getCategoryDataFromBlog(this.props.categoryList, blog);
    return (
      <div key={blog._id} className="blog-card">
        <img src={blog.imageSrc} alt={blog.title} />
        <div className="blog-content">
          <Link to={getCategoryUrl(category)} className="tag">
            {category.name}
          </Link>
          <Link to={getBlogUrl(blog)}>{blog.title}</Link>
        </div>
      </div>
    );
  };

  renderBigTile = blog => {
    const category = getCategoryDataFromBlog(this.props.categoryList, blog);
    return (
      <div key={blog._id} className="blog-card full">
        <img src={blog.imageSrc} alt={blog.title} />
        <div className="blog-content">
          <Link to={getCategoryUrl(category)} className="tag">
            {category.name}
          </Link>
          <Link to={getBlogUrl(blog)}>{blog.title}</Link>
          <div className="blog-detail">
            <img
              src="https://secure.gravatar.com/avatar/f88c13d62ba761a92211e266c22dbb1f?s=56&d=mm&r=g"
              className="mr-3"
              alt={blog.author}
            />
            {blog.author}, 5 Months ago
            <span className="mr-1 ml-2 border-right" />
            <Icon name="bubble" className="mr-1 ml-2" /> 96
            <span className="mr-1 ml-2 border-right" />
            <Icon name="clock" className="mr-1 ml-1" /> 3 min read
          </div>
        </div>
      </div>
    );
  };

  rednerSkeleton = () => {
    const tiles = [1, 2, 3, 4, 5];
    return (
      <div className="slider-grid-container">
        <Row className="m-0">
          <Col className="p-0" lg={3}>
            {tiles &&
              tiles
                .slice(0, 2)
                .map(tile => <div key={tile} className="blog-card" />)}
          </Col>
          <Col className="p-0" lg={6}>
            {tiles &&
              tiles
                .slice(2, 3)
                .map(tile => <div key={tile} className="blog-card full" />)}
          </Col>
          <Col className="p-0" lg={3}>
            {tiles &&
              tiles
                .slice(3, 5)
                .map(tile => <div key={tile} className="blog-card" />)}
          </Col>
        </Row>
      </div>
    );
  };

  renderBlogSlider = () => {
    const { trendingBlogList, categoryList } = this.props;
    const length = trendingBlogList.length;
    return (
      <div className="mt-4 mb-4 pl-1 pr-1">
        <SlickSlider merge={{ dots: false, slidesToShow: 3, autoplay: true }}>
          {trendingBlogList &&
            trendingBlogList
              .slice(5, length)
              .map(blog => (
                <SmallBlogCard blog={blog} showCategory categories={categoryList} />
              ))}
        </SlickSlider>
      </div>
    );
  };

  render() {
    const { trendingBlogsIsFetching, trendingBlogList } = this.props;
    if (trendingBlogsIsFetching && trendingBlogList.length === 0)
      return this.rednerSkeleton();
    return (
      <ErrorBoundary>
        <div className="slider-grid-container">
          <Row className="m-0">
            <Col className="p-0" lg={3}>
              {trendingBlogList &&
                trendingBlogList
                  .slice(0, 2)
                  .map(blog => this.renderSmallTile(blog))}
            </Col>
            <Col className="p-0" lg={6}>
              {trendingBlogList &&
                trendingBlogList
                  .slice(2, 3)
                  .map(blog => this.renderBigTile(blog))}
            </Col>
            <Col className="p-0" lg={3}>
              {trendingBlogList &&
                trendingBlogList
                  .slice(3, 5)
                  .map(blog => this.renderSmallTile(blog))}
            </Col>
          </Row>
          <Row className="m-0">
            <Col lg="12" className="p-0">
              {this.renderBlogSlider()}
            </Col>
          </Row>
        </div>
      </ErrorBoundary>
    );
  }
}

export default SliderGrid;
