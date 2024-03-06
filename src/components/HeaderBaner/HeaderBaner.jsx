import React from 'react'
import baner from '../images/baner_images.jpg'
import classes from './HeaderBaner.module.css'

export const HeaderBaner = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.text_amazing__discounts}>Amazing Discounts on Garden Products!</h1>
      <button className={classes.button_check}>Check out</button>
    </div>
  );
}

