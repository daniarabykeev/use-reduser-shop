import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

const init = {
  name: "",
  model: "",
  price: "",
  description: "",
  image1: "",
  image2: "",
  image3: "",
};

function EditProductPage() {
  const { getOneProduct, editProduct, oneProduct } = useContext(productContext);
  const { id } = useParams();
  const [phone, setPhone] = useState(init);
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setPhone(oneProduct);
    }
  }, [oneProduct]);

  function handleSubmit(e) {
    e.preventDefault();
    editProduct(id, phone);
    setPhone(init);
    navigate("/");
  }

  function handleChange(e) {
    let obj = {
      ...phone,
      [e.target.name]: e.target.value,
    };
    setPhone(obj);
  }

  return (
    <div style={{ marginLeft: "50px", marginTop: "50px" }}>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="name"
          value={phone.name}
          name="name"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="model"
          value={phone.model}
          name="model"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="price"
          value={phone.price}
          name="price"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="description"
          value={phone.description}
          name="description"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="image1"
          value={phone.image1}
          name="image1"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="image2"
          value={phone.image2}
          name="image2"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="image3"
          value={phone.image3}
          name="image3"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>Edit</button>
      </form>
    </div>
  );
}

export default EditProductPage;
