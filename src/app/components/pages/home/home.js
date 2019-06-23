import React from "react";
import "./home.scss";
import Page from "../../page";
import { Container, Col, Row } from "../../layout";
import Meta from "../../../constants/meta";
import SliderGrid from "../../../containers/sliderGrid";
import TodaysSpotlight from "../../../containers/todaysSpotlight";
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Page {...Meta.home}>
        <div className="home-page">
          <Container>
            <SliderGrid />
            <Row>
              <Col lg={9}>
                <TodaysSpotlight />
              </Col>
            </Row>
          </Container>
        </div>
      </Page>
    );
  }
}

export default Home;
