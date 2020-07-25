import * as actions from '../actions/index';
import createReducer from '../../lib/createReducer';
import * as InitialStates from '../../lib/initialStates';

export const reducer = createReducer(InitialStates.products, {
  [GET_PRODUCTS](state, action) {
    return Object.assign({}, state, action.products);
  },
});

