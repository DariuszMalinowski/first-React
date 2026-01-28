import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [
          ...state.columns,
          {
            ...action.payload,
            id: shortid(),
          },
        ],
      };

    case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: shortid(),
            title: action.payload.title,
            columnId: action.payload.columnId,
          },
        ],
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

