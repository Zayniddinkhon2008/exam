import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./goods.scss";
import { Button } from "@mui/material";
import delet from "./delet.png";
import { useNavigate } from "react-router-dom";

export default function Goods() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const handleDelete = (id) => {
    fetch(`https://64a6fca7096b3f0fcc80ef97.mockapi.io/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        // Remove the deleted item from the posts state
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "code", headerName: "Code", width: 200 },
    {
      field: "madeIn",
      headerName: "Made",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "priceInSale",
      headerName: "Price In Sale",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        const handleDeleteClick = () => {
          // Call the handleDelete function with the product's ID
          handleDelete(params.row.id);
        };

        return (
          <Button onClick={handleDeleteClick}>
            <img src={delet} alt="" />
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    fetch("https://64a6fca7096b3f0fcc80ef97.mockapi.io/products ")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="goods-heading-box">
        <div className="goods-box">
          <DataGrid
            rows={posts}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            checkboxSelection
          />
        </div>
        <div className="goods-bottom-box">
          <button
            onClick={() => {
              navigate("/NewGoods");
            }}
            className="goods-new-btn"
          >
            + Новый товар
          </button>
        </div>
      </div>
    </>
  );
}
