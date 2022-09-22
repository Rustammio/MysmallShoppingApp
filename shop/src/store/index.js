import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
// import {cardsReducer} from "./cards/cardsReducer";
import {rootReducer} from "./rootReducer";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store
