import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './sagas';
import { rootReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

//
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

//RUN WATCHER SAGA AND LISTEN TO REDUX ACTIONS
sagaMiddleware.run(rootSaga);

export { store };
