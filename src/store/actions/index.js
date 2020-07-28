import API from '../../lib/api';

const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"
const EDIT_PRODUCT = "EDIT_PRODUCT"
const DELETE_PRODUCT = "DELETE_PRODUCT"

const SET_ERROR = "SET_ERROR"
const PATCH_STATUS_UPDATE = "PATCH_STATUS_UPDATE"


export function getProducts() {
  return (dispatch, getState) => {

  };
}

export function addProduct() {
  return {
    type: ADD_PRODUCT
  };
}

export function patchStatusUpdate(status) {
  return {
    type: PATCH_STATUS_UPDATE,
    status,
  };
}

export function editProduct(product) {
  return {
    type: EDIT_PRODUCT,
    product,
  };
}

export function submitEditProduct(product) {
  return (dispatch, getState) => {
    let status = getState().products.patchSuccess
    API.patch(`/products/${product.id}/`, product)
      .then((response) => {
        dispatch(patchStatusUpdate(!status))
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })    
  };
}

export function submitAddProduct(product) {
  return (dispatch, getState) => {
    // let status = getState().products.patchSuccess
    API.post(`/products/`, product)
      .then((response) => {
        // dispatch(patchStatusUpdate(!status))
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })    
  };
}

export function deleteProduct(id) {
  return (dispatch, getState) => {
    API.delete(`/products/${id}/`)
      .then((response) => {

      })
      .catch((error) => {
        console.log(error);
      })    
  };
}