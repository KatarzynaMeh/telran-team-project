import React from "react";
import { useState } from "react";
import classes from "./HeaderNav.module.css";
import { SvgHeart } from "../../assets/iconComponents/SvgHeart";
import { SvgBascket } from "../../assets/iconComponents/SvgBascket";
import logo from "../../assets/iconComponents/logo.svg";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { calculateTotals } from "../../store/slices/cartSlice";
import DiscountPopup from "../DiscountPopup/DiscountPopup";
import { getSingleProduct } from "../../store/slices/singleProductSlice";
import { useLocation } from "react-router-dom";
import { SvgMoonSun } from "../../assets/iconComponents/SvgMoonSun";
import { countLike } from "../../store/slices/likedSlice";

export const HeaderNav = ({ handleChange, isChecked }) => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

 const location = useLocation()

  const dispatch = useDispatch();
  const { cart, amount } = useSelector((state) => state.cart);
  const { liked, amountLike } = useSelector((state) => state.liked);
  const product = useSelector((state) => state.singleProduct.discountProduct);

  useEffect(() => {
    dispatch(getSingleProduct(2));
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);

  const handleClickToggle = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const [isActive, setIsActive] = useState(false);

  const handlePopupClose = () => {
    setIsActive(false);
  };

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);

  useEffect(() => {
    dispatch(countLike());
  }, [liked]);

  const closeMenu = () => {
    setBurgerMenuOpen(false);
  };

  

  return (
    <div className={classes.container}>
      <DiscountPopup
        isActive={isActive}
        onClose={handlePopupClose}
        product={product[0]}
      />
      <div className={classes.logo_container}>
        <Link to={"/"}>
          <img src={logo} alt="logo" className={classes.logo} />
        </Link>
        <div className={classes.dark_mode}>
          <input
            className={classes.dark_mode__input}
            type="checkbox"
            id="darkmode-toggle"
            onChange={handleChange}
            checked={isChecked}
          />
          <label className={classes.dark_mode__label} htmlFor="darkmode-toggle">
            <SvgMoonSun />
          </label>
        </div>
      </div>

      <div
        className={`${classes.central_container__nav} ${
          burgerMenuOpen ? classes.active : ""
        }`}
      >
        <button onClick={() => setIsActive(true)} className={classes.btn}>
          1 day discount!
        </button>
        <button onClick={handleClickToggle} className={classes.cross_btn}>
          <div className={classes.cross}>
            <span className={classes.span_bevelled__top}></span>
            <span className={classes.span_bevelled__botton}></span>
          </div>
        </button>

        <nav className={classes.nav_container}>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                className={`${classes.nav_element__style} ${
                  location.pathname === "/" ? classes.active : ""
                }`}
                onClick={closeMenu}
              >
                Main Page
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                exact
                to="/categories"
                className={`${classes.nav_element__style} ${
                  location.pathname === "/categories" ? classes.active : ""
                }`}
                onClick={closeMenu}
              >
                Categories
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                exact
                to="/all-products"
                className={`${classes.nav_element__style} ${
                  location.pathname === "/all-products" ? classes.active : ""
                }`}
                onClick={closeMenu}
              >
                All products
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                exact
                to="/all-sales"
                className={`${classes.nav_element__style} ${
                  location.pathname === "/all-sales" ? classes.active : ""
                }`}
                onClick={closeMenu}
              >
                All sales
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className={classes.btn_burger__menu} onClick={closeMenu}>
          1 day discount!
        </button>
      </div>

      <div className={classes.container_icon__menu}>
        <div className={classes.icon_container}>
          <Link className={classes.liked_container} to="/favorite">
            <p
              className={`${classes.liked_amount}  ${
                location.pathname === "/favorite" ? classes.iconActive : ""
              }`}
            >
              {amountLike}
            </p>
            <SvgHeart />
          </Link>
          <Link className={classes.cart_wrapper} to="/cart">
            <p
              className={`${classes.cart_amount} ${
                location.pathname === "/cart" ? classes.iconActive : ""
              }`}
            >
              {amount}
            </p>
            <SvgBascket />
          </Link>
        </div>

        <button className={classes.menu_btn} onClick={handleClickToggle}>
          <div className={classes.menu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>
  );
};
