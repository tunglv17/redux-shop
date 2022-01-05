import { combineReducers } from "redux";
import productReducer from "./product/reducer";
const rootReducer = combineReducers({
listProduct: productReducer
});

export default rootReducer;