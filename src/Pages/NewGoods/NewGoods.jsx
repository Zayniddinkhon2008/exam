import React, { useState } from "react";
import "./newgoods.scss";
import { useNavigate } from "react-router-dom";
import img from "./img.png";
import delet from "./delete.png";
import Axios from "axios";

export default function NewGoods() {
  const [data, setData] = useState({
    name: "",
    brand: "",
    code: "",
    madeIn: "",
    description: "",
    createdAt: "",
    image: "",
    price: "",
    priceInSale: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://64a6fca7096b3f0fcc80ef97.mockapi.io/products", data)
      .then((res) => {
        console.log(res.data);
        // Reset the form fields after successful submission
        setData({
          name: "",
          brand: "",
          code: "",
          madeIn: "",
          description: "",
          createdAt: "",
          image: "",
          price: "",
          priceInSale: "",
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const url = "";
  const btn = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const showImage = (e) => {
    setSelectedImage({ image: URL.createObjectURL(e.target.files[0]) });
    setData({
      ...data,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleCancel = () => {
    btn("/Goods");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="new-heading-box ">
          <button
            className="new-btn"
            onClick={() => {
              btn("/Goods");
            }}
          >
            Основные
          </button>
          <div className="new-top-box">
            <h1 className="new-heading">Название *</h1>
            <input
              onChange={(e) => setData({ ...data, name: e.target.value })}
              type="text"
              value={data.name}
              id="name"
              className="new-inp1"
            />
            <br />
            <div className="new-box">
              <div className="new-row">
                <h1 className="new-heading">Название *</h1>
                <input
                  onChange={(e) => setData({ ...data, brand: e.target.value })}
                  type="text"
                  value={data.brand}
                  id="brand"
                  name=""
                  className="new-inp"
                />
              </div>
              <div className="new-row">
                <h1 className="new-heading">Артикул производителя *</h1>
                <input
                  onChange={(e) => setData({ ...data, code: e.target.value })}
                  type="text"
                  value={data.code}
                  id="code"
                  name=""
                  className="new-inp"
                />
              </div>
            </div>
            <br />
            <h1 className="new-heading">Страна производства</h1>
            <input
              onChange={(e) => setData({ ...data, madeIn: e.target.value })}
              type="text"
              value={data.madeIn}
              id="madeIn"
              name=""
              className="new-inp"
            />
            <br />
            <h1 className="new-heading">Описание *</h1>
            <input
              onChange={(e) => setData({ ...data, description: e.target.value })}
              type="text"
              value={data.description}
              id="description"
              name=""
              className="new-inp2"
            />
            <br />
            <h1 className="new-heading">Вес с упаковкой, грамм</h1>
            <input
              onChange={(e) => setData({ ...data, createdAt: e.target.value })}
              type="text"
              value={data.createdAt}
              id="createdAt"
              name=""
              className="new-inp3"
            />
          </div>
          <div className="new-bottom-box">
            <h1 className="new-heading">Фотографии *</h1>
            <div className="new-logo-box">
              <input
                accept="image/*"
                className="new-bottom-heading-inp"
                onChange={(e) => {showImage(e)}}
                id="image"
                type="file"
                value={data.image}
                style={{ display: "none" }}
              />

              {selectedImage ? (
                <img src={selectedImage?.image} className="new-bottom-img" />
              ) : (
                <label className="new-lable" htmlFor="image">
                  <img src={img} alt="" />
                </label>
              )}
              {selectedImage ? (
                <button
                  className="new-bottom-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  <img src={delet} className="new-delet" alt="" />
                </button>
              ) : null}
            </div>

            <p className="new-text">Загрузите не более 20 фотографий</p>
            <div className="new-bottom-item-box">
              <div className="new-bottom-item-row-box">
                <h1 className="new-heading">Цена</h1>
                <input
                  onChange={(e) => setData({ ...data, price: e.target.value })}
                  type="text"
                  value={data.price}
                  id="price"
                  className="new-bottom-inp"
                  name=""
                />
              </div>
              <div className="new-bottom-item-row-box">
                <h1 className="new-heading">Цена со скидкой</h1>
                <input
                  onChange={(e) => setData({ ...data, priceInSale: e.target.value })}
                  type="text"
                  value={data.priceInSale}
                  id="priceInSale"
                  className="new-bottom-inp"
                  name=""
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="new-bottom-left-btn">
              Сохранить
            </button>
            {/* <button className="new-bottom-right-btn" onClick={handleCancel}>
              Отмена
            </button> */}
          </div>
        </div>
       
      </form>
    </>
  );
}
