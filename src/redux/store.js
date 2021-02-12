import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import todo from "./reducer";

// здесь меняем State. A Фунция todo приходит из reducer

const store = createStore(todo, composeWithDevTools(applyMiddleware(thunk)));

export default store;
