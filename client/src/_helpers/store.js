import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import storage from 'redux-persist/lib/storage'

const loggerMiddleware = createLogger();

const persistConfig = {
    key: 'app',
    storage,
    whitelist: ['answers','level','solved']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    compose(applyMiddleware(thunkMiddleware,loggerMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const persistedStore = persistStore(store)

export default { store, persistedStore }