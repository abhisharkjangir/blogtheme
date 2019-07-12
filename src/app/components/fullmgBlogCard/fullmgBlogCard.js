import React from "react";
import { Link } from "react-router-dom";
import "./fullmgBlogCard.scss";
import {
  getCategoryDataFromBlog,
  getCategoryUrl,
  getBlogUrl
} from "../../utils/common";
import Icon from "../icon/icon";
import Image from "../common/Image/image";

const FullImgBlogCard = ({ blog, categories, showAuthor }) => {
  const category = getCategoryDataFromBlog(categories, blog);
  return (
    <section key={blog._id} className="full-img-blog-card">
      <Image src={blog.imageSrc} alt={blog.title} />
      <div className="blog-content">
        <Link to={getCategoryUrl(category)} className="tag">
          {category.name}
        </Link>
        <Link to={getBlogUrl(blog)}>{blog.title}</Link>
        {showAuthor && <div className="blog-detail">
          <Image
            src="https://secure.gravatar.com/avatar/f88c13d62ba761a92211e266c22dbb1f?s=56&d=mm&r=g"
            className="mr-3"
            alt={blog.author}
          />
          {blog.author}, 5 Months ago
          <span className="mr-1 ml-2 border-right" />
          <Icon name="bubble" className="mr-1 ml-2" /> 96
          <span className="mr-1 ml-2 border-right" />
          <Icon name="clock" className="mr-1 ml-1" /> 3 min read
        </div>}
      </div>
    </section>
  );
};

export default FullImgBlogCard;
