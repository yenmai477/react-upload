import React, { Fragment } from "react";

const Spinner = ({ spinnerSrc }) => {
  return (
    <Fragment>
      <img src={spinnerSrc} alt="loading..." style={spinnerStyle} />
    </Fragment>
  );
};

const spinnerStyle = {
  width: "50px",
  margin: "auto",
  display: "block",
};
export default Spinner;
