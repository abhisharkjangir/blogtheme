import React from "react";

import "./newestBlogs.scss";
import BorderHeading from "../borderHeading/borderHeading";
import { Col, Row } from "../layout";
import LargeBlogCard from "../largeBlogCard/largeBlogCard";

class NewestBlogs extends React.PureComponent {
  renderSkeleton = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <React.Fragment>
        <BorderHeading text="Tech & Gadgets" />
        <Row>
          {cards &&
            cards.map(card => (
              <Col key={card} className="p-0" lg={4}>
                <div className="large-skeleton-card" />
              </Col>
            ))}
        </Row>
      </React.Fragment>
    );
  };

  render() {
    const { trendingBlogsIsFetching, trendingBlogList } = this.props;
    if (trendingBlogsIsFetching && trendingBlogList.length === 0)
      return this.renderSkeleton();
    return (
      <div className="">
        <BorderHeading text="Newest Articles" />
        <Row className="m-0 p-0">
          {trendingBlogList &&
            trendingBlogList.map(blog => (
              <Col key={blog._id} className="p-0" lg={4}>
                <LargeBlogCard blog={blog} />
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}

export default NewestBlogs;
