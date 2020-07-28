import * as actions from '../actions/index';
import createReducer from '../../lib/createReducer';
import * as InitialStates from '../../lib/initialStates';

export const productReducer = createReducer(InitialStates.products, {
  ["GET_PRODUCTS"](state, action) {
    return Object.assign({}, state, action.products);
  },
  ["EDIT_PRODUCT"](state, action) {
    return Object.assign({}, state, {editedProduct: action.product, editingProduct: true});
  },
  ["ADD_PRODUCT"](state, action) {
    return Object.assign({}, state, {editedProduct: {title: "", desc: "", price: "", summary: "", featured: false}, editingProduct: false});
  },
  ["PATCH_STATUS_UPDATE"](state, action) {
    return Object.assign({}, state, {patchSuccess: action.status});
  },
});


