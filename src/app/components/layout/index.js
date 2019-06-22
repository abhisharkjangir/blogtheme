import React from "react";
import "./layout.scss";

export const Row = ({ children, className }) => (
  <div className={`row ${className ? className : ""}`}>{children}</div>
);

export const Container = ({ children }) => (
  <div className="container">{children}</div>
);

export const ContainerFluid = ({ children }) => (
  <div className="container-fluid">{children}</div>
);

export const Flex = ({ children, direction }) => {
  const style = {
    display: "flex",
    flexDirection: direction || "row",
    flexWrap: "wrap"
  };
  return <div style={style}>{children}</div>;
};

export const Col = ({ children, xs, sm, md, lg, className }) => {
  let classes = "";
  if (xs) {
    classes = `col-xs-${xs}`;
  }
  if (sm) {
    classes = `${classes} col-sm-${sm}`;
  }
  if (md) {
    classes = `${classes} col-md-${md}`;
  }
  if (lg) {
    classes = `${classes} col-lg-${lg}`;
  }
  if (className) {
    classes = `${classes} ${className}`;
  }
  return <div className={classes}>{children}</div>;
};
