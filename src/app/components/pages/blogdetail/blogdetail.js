import React from "react";
import { isEmpty, pathOr } from "lodash/fp";
import { Link } from "react-router-dom";
import "./blogdetail.scss";
import Page from "../../page";
import { Container, Col, Row } from "../../layout";
import Meta from "../../../constants/meta";
import {
  extractShortDescription,
  getTimeString,
  getCategoryDataFromBlog,
  getCategoryUrl
} from "../../../utils/common";
import Image from "../../common/Image";
import Icon from "../../icon/icon";
import TodaysSpotlight from "../../../containers/todaysSpotlight/todaysSpotlight";

class BlogDetail extends React.PureComponent {
  static getDerivedStateFromProps(props, state) {
    const blogId = pathOr(null, "params.blogId", props.match);
    if (blogId)
      return {
        blogId
      };

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { blogDetailIsFetching, blogDetail, fetchBlogDetail } = this.props;
    const { blogId } = this.state;
    if (!blogDetailIsFetching && isEmpty(blogDetail)) {
      fetchBlogDetail(blogId);
    }
  }

  componentWillUnmount() {
    this.props.resetBlogDetail();
  }

  renderSkelton = () => <span>Loading...</span>;

  render() {
    const { blogDetailIsFetching, blogDetail, categoryList } = this.props;
    if (blogDetailIsFetching && isEmpty(blogDetail)) this.renderSkelton();
    const {
      author,
      imageSrc,
      keywords,
      publishedDate,
      sharedCount,
      story,
      title,
      updatedDate,
      viewsCount,
      _id
    } = blogDetail;
    const blogCategory = getCategoryDataFromBlog(categoryList, blogDetail);
    const description = extractShortDescription(story);

    const blogMetaData = {
      id: _id,
      title,
      keywords,
      image: imageSrc,
      updated: updatedDate,
      published: publishedDate,
      description
    };
    return (
      <Page {...Meta.blogDetail} {...blogMetaData}>
        <div className="blog-detail-wrapper">
          <div className="breadcrumbs">
            <Container>
              Home <Icon name="arrow-right" /> Blog <Icon name="arrow-right" />{" "}
              {title}
            </Container>
          </div>
          <Container>
            <div className="blog-detail">
              <div className="category-tag">
                <Link className="text-muted" to={getCategoryUrl(blogCategory)}>
                  {blogCategory.name}
                </Link>
              </div>
              <h1 className="title">{title}</h1>
              <p className="description text-muted">
                {extractShortDescription(story, 200)}
              </p>
              {author && (
                <div className="other text-muted fs-12 d-flex">
                  <Image
                    src="https://secure.gravatar.com/avatar/f88c13d62ba761a92211e266c22dbb1f?s=56&d=mm&r=g"
                    className="mr-2"
                    width="34"
                    height="34"
                  />
                  <p className="d-flex ">
                    <span className="mr-1 pr-2 border-right">{author} </span>
                    <span className=" ml-1">{getTimeString(updatedDate)}</span>
                    <span className="mr-1 ml-2 border-right" />
                    <Icon name="bubble" className="mr-1 ml-2" /> 96
                    <span className="mr-1 ml-2 border-right" />
                    <Icon name="clock" className="mr-1 ml-1 " /> 3 min read
                    <span className="mr-1 ml-2 border-right" />
                    <Icon name="share" className="mr-1 ml-1 " /> {sharedCount}
                    <span className="mr-1 ml-2 border-right" />
                    <Icon name="eye" className="mr-1 ml-1 " /> {viewsCount}
                  </p>
                </div>
              )}
              <Image src={imageSrc} className="blog-image" />
              <div
                className="html-content"
                dangerouslySetInnerHTML={{ __html: story }}
              />
              <div className="next-prev-links">
                <Row>
                  <Col xs={6} lg={4}>
                    <p>Previous</p>
                    <Link to="">
                      Beautiful Architecture That Will Blow Your Mind
                    </Link>
                  </Col>
                  <Col lg={4} />
                  <Col xs={6} lg={4} className="next">
                    <p>Next</p>
                    <Link to="">White Stairway. Architectural marvel!</Link>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="related-blogs">
              <TodaysSpotlight
                slickSetting={{
                  dots: false,
                  slidesToShow: 3,
                  slidesToScroll: 3
                }}
              />
            </div>
          </Container>
        </div>
      </Page>
    );
  }
}

export default BlogDetail;
