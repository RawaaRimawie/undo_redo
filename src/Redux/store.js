// store.js
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import taskReducer from './taskReducer';
import rootSaga from './sagas';
import { createStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    taskReducer, 
    applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(rootSaga);

export default store;
