import {combineReducers, createStore} from "redux";
import dcReduxer from "./dc-reducer";
import marvelReduxer from "./marvel-reducer";
import sasReduxer from "./sas-reducer";
import dleeReduxer from "./dlee-reducer";


let reducers = combineReducers({
    dc: dcReduxer,
    marvel: marvelReduxer,
    dlee: dleeReduxer,
    sas: sasReduxer

});

let store = createStore(reducers)

export default store;