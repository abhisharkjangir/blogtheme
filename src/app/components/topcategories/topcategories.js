import React from "react";
import { Link } from "react-router-dom";
import "./topcategories.scss";
import { getBlogUrl, getTimeString } from "../../utils/common";
import BorderHeading from "../borderHeading/borderHeading";

import Image from "../common/Image/image";
import Icon from "../icon/icon";
import { Row, Col } from "../layout";
import SmallBlogCard from "../smallBlogCard";

const LargeBlogCard = ({ blog }) => {
  return (
    <article key={blog._id} className="large-blog-card">
      <Image src={blog.imageSrc} alt={blog.title} />
      <Link to={getBlogUrl(blog)} className="title">
        {blog.title}
      </Link>
      <p className="detail text-muted">
        {blog.author}, {getTimeString(blog.createdDate)}
        <span className="mr-1 ml-2 border-right" />
        <Icon name="clock" className="mr-1 ml-1" /> 3 min read
      </p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet,
        nunc et accumsan cursus, neque eros sodales lectus, in fermentum…
      </p>
    </article>
  );
};

class TopCategories extends React.PureComponent {
  renderSkeleton = () => {
    const cards = [1, 2, 3, 4, 5, 6];
    return (
      <React.Fragment>
        <BorderHeading text="Top Categories" />
        <Row>
          {cards.slice(0, 2).map(blog => (
            <Col className="p-0" lg={6}>
              <div className="large-skeleton-card" />
            </Col>
          ))}

          {cards.slice(0, 6).map(blog => (
            <Col className="p-0" lg={6}>
              <div className="small-skeleton-card" />
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
              <LargeBlogCard blog={blog} />
            </Col>
          ))}
          {trendingBlogList.slice(3, trendingBlogList.length).map(blog => (
            <Col className="p-0" lg={6}>
              <SmallBlogCard blog={blog} showDetail categories={categoryList} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default TopCategories;
