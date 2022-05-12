import { getTopHeadlineRequest } from '../api';
import { put, takeLatest, all } from '@redux-saga/core/effects';
import { getReposRequest } from '../lib';

//FUNCTION* GENERATOR FUNCTIONS JS
function* getRepos({ payload }) {
  try {
    const res = yield getReposRequest(payload);
    if (res.data.length > 0) {
      yield put({
        type: 'API_SUCCESS',
        data: res.data,
      });
    } else {
      yield put({ type: 'API_LIST_END' });
    }
  } catch (err) {
    yield put({
      type: 'API_FAILURE',
      error: err.message,
    });
  }
}

function* RepoSaga() {
  yield takeLatest('API_REQUEST', getRepos);
}

export default function* rootSaga() {
  yield all([RepoSaga()]);
}
