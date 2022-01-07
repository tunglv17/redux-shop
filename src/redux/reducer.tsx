import { combineReducers } from "redux";
import categoryReducer from "./category/reducer";
import productReducer from "./product/reducer";
const rootReducer = combineReducers({
listProduct: productReducer,
listCategory:categoryReducer
});

export default rootReducer;