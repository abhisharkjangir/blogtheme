import React from "react";
import "./subscribe.scss";
import BorderHeading from "../borderHeading/borderHeading";
import Input from "../common/input";
import Form from "../common/form";
import Button from "../common/button";

class Subscribe extends React.PureComponent {
  render() {
    return (
      <div className="subscribe">
        <BorderHeading heading="h3" text="Subscribe for newsletter" />
        <p className="text-muted fs-10 pl-1 pr-1">
          You will receive the latest news and updates on your favorite content.
        </p>
        <Form>
          <Input placeholder="Your email address" />
          <Button label="Subscribe" />
        </Form>
      </div>
    );
  }
}
export default Subscribe;
