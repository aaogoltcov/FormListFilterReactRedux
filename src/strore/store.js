import { createStore } from 'redux'
import manager from "../reducers/manager";

let store = createStore(manager);

export default store;