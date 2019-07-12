import React from "react";
import "./home.scss";
import Page from "../../page";
import { Container, Col, Row } from "../../layout";
import Meta from "../../../constants/meta";
import SliderGrid from "../../../containers/sliderGrid";
import TodaysSpotlight from "../../../containers/todaysSpotlight";
import TopCategories from "../../../containers/topcategories";
import NewestBlogs from "../../../containers/newestBlogs"
import TechAndGadgets from "../../../containers/techAndGadgets";
class Home extends React.PureComponent {

  render() {
    return (
      <Page {...Meta.home}>
        <div className="home-page">
          <Container>
            <SliderGrid />
            <Row>
              <Col lg={9}>
                <TodaysSpotlight slickSetting={{ dots: false, slidesToShow: 3, slidesToScroll: 3}}/>
                <TopCategories />
              </Col>
              <Col lg={12}>
                <TechAndGadgets  slickSetting={{ dots: false, slidesToShow: 4, slidesToScroll: 1}}/>
              </Col>
              <Col lg={9}>
                <NewestBlogs />
              </Col>
            </Row>
          </Container>
        </div>
      </Page>
    );
  }
}

export default Home;
