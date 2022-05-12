import { combineReducers } from 'redux';

const initialState = {
  loading: false,
  moreLoading: false,
  error: null,
  moreError: null,
  data: [],
  isListEnd: false,
};

const RepoReducers = (state = initialState, action) => {
  console.log({ action });
  switch (action.type) {
    case 'API_REQUEST': //REQUEST DATA FROM APIS
      if (action.payload.page === 1) {
        return { ...state, loading: true };
      } else {
        return { ...state, moreLoading: true };
      }

    case 'API_SUCCESS': //REQUEST SUCCESS
      return {
        ...state,
        data: [...state.data, ...action.data],
        error: '',
        loading: false,
        moreLoading: false,
      };

    case 'API_FAILURE': //REQUEST FAIL
      return {
        ...state,
        error: action.error,
        loading: false,
        moreLoading: false,
      };

    case 'API_LIST_END': //REQUEST DATA HAS REACH END
      return {
        ...state,
        isListEnd: true,
        loading: false,
        moreLoading: false,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  repos: RepoReducers,
});
