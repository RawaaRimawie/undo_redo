// sagas.js
import { put, takeEvery } from 'redux-saga/effects';
import { UNDO, REDO } from './actionTypes';

function* undo() {
  // You can add any side effects here
    console.log('Undo action triggered');
    yield put({ type: UNDO });
}

function* redo() {
  // You can add any side effects here
    console.log('Redo action triggered');
    yield put({ type: REDO });
}

export default function* rootSaga() {
    yield takeEvery('TRIGGER_UNDO', undo);
    yield takeEvery('TRIGGER_REDO', redo);
}
