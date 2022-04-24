import {
  ADD_CART,
  DELETE_CART,
  REMOVE_ALL,
  SEARCH_DATA,
  STORE_DATA,
} from "../ActionTypes/actiontype";
const init = {
  data: [],
  search: "",
  cart: [],
};
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case STORE_DATA:
      return { ...state, data: payload };
    case SEARCH_DATA:
      return { ...state, search: payload };
    case ADD_CART:
      var AddCart = [...state.cart, payload];
      return { ...state, cart: AddCart };

    case DELETE_CART:
      var dcart = state.cart.filter((e) => {
        if (e.id !== payload) {
          return e;
        }
      });
      return { ...state, cart: [...dcart] };
    case REMOVE_ALL:
      return { ...state, cart: [] };
    default:
      return state;
  }
};
export { reducer };
