import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

function MainPage() {
  const { products, getProducts, deleteProducts } = useContext(productContext);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ marginLeft: "50px", marginTop: "50px", display: "flex" }}>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <div
              style={{
                border: "1px solid black",
                width: "300px",
                marginRight: "50px",
                borderRadius: "9px",
              }}
            >
              <img
                src={item.image1}
                alt=""
                style={{ width: "300px", borderRadius: "9px" }}
              />
              <h2>{item.name}</h2>
              <h2>{item.model}</h2>
              {/* <h5>{item.description}</h5> */}
              <button
                style={{ borderRadius: "9px" }}
                onClick={(e) => {
                  deleteProducts(item.id);
                }}
              >
                delete
              </button>
              <button
                style={{ borderRadius: "9px" }}
                onClick={(e) => {
                  navigate(`/edit/${item.id}`);
                }}
              >
                edit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainPage;
