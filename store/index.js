import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import MenuList from '../containers/Menu/store';

const reducers = combineReducers({
    MenuList
})

const getStore = () => {
    const store = createStore(reducers, applyMiddleware(thunk));
    return store;
}
const getClientStore = () => {
    let defaultContext = window._context ? window._context : {}
    const store = createStore(reducers, defaultContext, applyMiddleware(thunk));
    return store;
}

export {
    getStore,
    getClientStore
};