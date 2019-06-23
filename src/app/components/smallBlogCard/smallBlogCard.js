import React from "react";
import { Link } from "react-router-dom";
import "./smallBlogCard.scss";
import {
  getCategoryDataFromBlog,
  getCategoryUrl,
  getBlogUrl
} from "../../utils/common";

const SmallBlogCard = ({ blog, categories }) => {
  let category = getCategoryDataFromBlog(categories, blog);
  return (
    <div className="small-blog-card">
      <img src={blog.imageSrc} alt={blog.title} />
      <div className="blog-detail">
        <Link to={getCategoryUrl(category)} className="text-muted fs-12">
          {category.name}
        </Link>
        <br />
        <Link to={getBlogUrl(blog)}>{blog.title}</Link>
      </div>
    </div>
  );
};

export default SmallBlogCard;
