import React from "react";
import { Link } from "react-router-dom";
import "./categories.scss";
import BorderHeading from "../borderHeading/borderHeading";
import { getCategoryUrl } from "../../utils/common";

class Categories extends React.PureComponent {
  renderSkeleton = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <React.Fragment>
        <BorderHeading text="Categories" />
        <div className="categories-skelton">
          <ul>
            {cards.map(blog => (
              <li key={blog} className="p-0" />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { categoryIsFetching, categoryList } = this.props;
    if (categoryIsFetching && categoryList.length === 0)
      return this.renderSkeleton();

    return (
      <div className="categories">
        <BorderHeading heading="h3" text="Categories" />
        <ul>
          {categoryList.map(cat => (
            <Link key={cat._id} to={getCategoryUrl(cat)}>
              <li>{cat.name}</li>
            </Link>
          ))}
          <Link to="/categories">
            <li>View All</li>
          </Link>
        </ul>
      </div>
    );
  }
}
export default Categories;
