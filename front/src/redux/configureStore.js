import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './index';

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//     let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
//     let persistor = persistStore(store)
//     return { store, persistor }
// }
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;