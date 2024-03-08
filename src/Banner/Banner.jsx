import React from "react";
import classes from "./Banner.module.css";

export const Banner = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.text_amazing__discounts}>
        Amazing Discounts on Garden Products!
      </h1>
      <button className={classes.button_check}>Check out</button>
    </div>
  );
};
