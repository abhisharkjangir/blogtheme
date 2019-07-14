import React from "react";
import { Link } from "react-router-dom";
import "./largeBlogCard.scss";
import { getBlogUrl, getTimeString } from "../../utils/common";
import Icon from "../icon/icon";
import Image from "../common/Image/image";

const LargeBlogCard = ({ blog, showDescription }) => {
  return (
    <article key={blog._id} className="large-blog-card">
      <Image src={blog.imageSrc} alt={blog.title} />
      <Link to={getBlogUrl(blog)} className="title">
        {blog.title}
      </Link>
      <p className="detail text-muted">
        <span className="mr-1 pr-2 border-right">{blog.author} </span>
        <span className=" ml-1">{getTimeString(blog.updatedDate)}</span>
        <span className="mr-1 ml-2 border-right" />
        <Icon name="clock" className="mr-1 ml-1" /> 3 min read
      </p>
      {showDescription && (
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet,
          nunc et accumsan cursus, neque eros sodales lectus, in fermentum…
        </p>
      )}
    </article>
  );
};

export default LargeBlogCard;
