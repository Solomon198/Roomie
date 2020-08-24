import {createStore,applyMiddleware} from 'redux';
import Reducers from "../reducers/index";
import RootSaga from '../saga/saga';
import createSagaMiddleWare from 'redux-saga';
import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage,
    blacklist:["auth"]
}

const persistedReducer = persistReducer(persistConfig,Reducers);

const sagaMiddleware = createSagaMiddleWare();
export const store = createStore(persistedReducer,applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);
sagaMiddleware.run(RootSaga);

