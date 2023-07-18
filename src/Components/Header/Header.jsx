import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useResolvedPath } from "react-router-dom";
import Home from "./Home.png";
import BlankGoods from "./BlankGoods.png";
import Goods from "./Goods.png";
import NewGoods from "./NewGoods.png";
import img from "./img.png";
import "./header.scss";
import btnImg from "./btnImg.png";

export default function Header() {
  const navigate = useNavigate();
  const path = useResolvedPath();
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (path.pathname === "/NewGoods") {
      setTitle("Новый товар");
    } else if (path.pathname === "/BlankGoods") {
      setTitle("Товары");
    } else if (path.pathname === "/Goods") {
      setTitle("Товары");
    } else if (path.pathname === "/") {
      setTitle("Товары");
    }
  }, [path.pathname]);
  return (
    <div className="header-heading-box">
      <div className="header-box">
        <div className="header">
          <NavLink className="header-logo-box" to="/Goods">
            <img src={Home} alt="" />
          </NavLink>
          <div className="header-link1">
            <NavLink className="header-link" to="/BlankGoods">
              <img src={BlankGoods} alt="" />
            </NavLink>
            <NavLink className="header-link" to="/Goods">
              <img src={Goods} alt="" />
            </NavLink>
            <NavLink className="header-link" to="/NewGoods">
              <img src={NewGoods} alt="" />
            </NavLink>
            <NavLink className="header-link" to="/">
              <img src={img} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div>
          <h1 className="header-heading">
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Mulish:wght@800&family=Rubik+Mono+One&display=swap');
            </style>
            {title}
          </h1>
          <p className="header-text">Главная / {title}</p>
        </div>

        <button
          onClick={() => {
            navigate("/Goods");
          }}
          className="header-btn"
        >
          <img src={btnImg} alt="" className="header img" />
          Выйти
        </button>
      </div>
    </div>
  );
}
