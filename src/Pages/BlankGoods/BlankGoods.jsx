import React from "react";
import "./blankgoods.scss";
import img from "./image 2.png";
import { useNavigate } from "react-router-dom";
export default function BlankGoods() {
  const btn = useNavigate();
  return (
    <div className="container">
      <div className="BlankGoods-box">
        <h1 className="BlankGoods-heading">
          Вы пока не создали ни одного товара
        </h1>
        <img src={img} alt="" className="BlankGoods-img" />
        <br />
        <button
          className="BlankGoods-btn"
          onClick={() => {
            btn("/NewGoods");
          }}
        >
          Создать первый товар
        </button>
      </div>
    </div>
  );
}
