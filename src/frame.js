import React from "react";
import styleable from "react-styleable";
import css from "./frame.module.css";

function Frame({ children, css }) {
  return <div className={css.root}>{children}</div>;
}

// css is passed in (above) by styleable, below.

export default styleable(css)(Frame);
