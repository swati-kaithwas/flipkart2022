import { productreducer } from "./reducer/reducer";
// import { createStore } from "redux";
// const store = createStore(productreducer);
// export { store };
import { reducer } from "./reducer/reducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ reducer: reducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
