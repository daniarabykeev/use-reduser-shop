import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { actionTypesProducts, API } from "../helpers/consts";

export const productContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case actionTypesProducts.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypesProducts.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const initState = {
  products: [],
  oneProduct: null,
};

function ProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getProducts() {
    const { data } = await axios(API);
    dispatch({
      type: actionTypesProducts.GET_PRODUCTS,
      payload: data,
    });
  }

  async function addProducts(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }

  async function deleteProducts(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: actionTypesProducts.GET_ONE_PRODUCT,
      payload: data,
    });
  }

  async function editProduct(id, newProduct) {
    await axios.patch(`${API}/${id}`, newProduct);
    getProducts();
  }

  const value = {
    products: state.products,
    getProducts: getProducts,
    addProducts: addProducts,
    deleteProducts: deleteProducts,
    getOneProduct: getOneProduct,
    editProduct: editProduct,
    oneProduct: state.oneProduct,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
