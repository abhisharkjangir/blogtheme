import React from "react";
import { Link } from "react-router-dom";
import "./smallBlogCard.scss";
import {
  getCategoryDataFromBlog,
  getCategoryUrl,
  getBlogUrl,
  getTimeString
} from "../../utils/common";
import Icon from "../icon/icon";

const SmallBlogCard = ({ blog, categories, showDetail, showCategory }) => {
  let category = getCategoryDataFromBlog(categories, blog);
  return (
    <div className="small-blog-card">
      <img src={blog.imageSrc} alt={blog.title} />
      <div className="blog-detail">
        {showCategory && (
          <Link
            to={getCategoryUrl(category)}
            className="text-muted d-block mb-2 mt-1 fs-12"
          >
            {category.name}
          </Link>
        )}
        <Link to={getBlogUrl(blog)}>{blog.title}</Link>
        {showDetail && (
          <p className="detail text-muted fs-12 mt-1">
            {blog.author}, {getTimeString(blog.createdDate)}
            <span className="mr-1 ml-2 border-right" />
            <Icon name="clock" className="mr-1 ml-1" /> 3 min read
          </p>
        )}
      </div>
    </div>
  );
};

export default SmallBlogCard;
