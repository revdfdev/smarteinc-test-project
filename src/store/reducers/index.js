import { combineReducers } from "redux";
import details from "../ducks/details.duck";

export function reducers() {
    return combineReducers({
        details: details
    });
}