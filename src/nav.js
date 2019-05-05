import PropTypes from "prop-types";
import React from "react";
import styleable from "react-styleable";
import css from "./nav.module.css";

function getPrevStyle(props) {
  return props.hasPrevious ? props.css.prev : props.css.prevHidden;
}

function getNextStyle(props) {
  return props.hasNext ? props.css.next : props.css.nextHidden;
}

function Nav(props) {
  return (
    <div className={props.css.root}>
      <button className={getPrevStyle(props)} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button className={getNextStyle(props)} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

export default styleable(css)(Nav);
