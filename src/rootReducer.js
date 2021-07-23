import { combineReducers } from "redux";
import cartReducer from "./containers/ProductContainer/reducers";

const rootReducer = combineReducers({ cartReducer });
export default rootReducer;
