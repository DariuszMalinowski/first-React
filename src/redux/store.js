import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';
import { createSelector } from 'reselect';

// ========================
// SELECTORS
// ========================

// selektory bazowe
const cardsSelector = state => state.cards;
const columnsSelector = state => state.columns;
const listsSelector = state => state.lists;
const searchStringSelector = state => state.searchString;

// memoizowany selektor kart według kolumny i searchString
export const getFilteredCards = createSelector(
  [cardsSelector, searchStringSelector, (_, columnId) => columnId],
  (cards, searchString, columnId) =>
    cards.filter(
      card =>
        card.columnId === columnId &&
        strContains(card.title, searchString)
    )
);

// selektor wszystkich kolumn (nie trzeba memoizować, bo zwraca zawsze ten sam array)
export const getAllColumns = columnsSelector;

// memoizowany selektor listy po ID
export const getListById = createSelector(
  [listsSelector, (_, listId) => listId],
  (lists, listId) => lists.find(list => list.id === listId)
);

// memoizowany selektor kolumn dla konkretnej listy
export const getColumnsByList = createSelector(
  [columnsSelector, (_, listId) => listId],
  (columns, listId) => columns.filter(column => column.listId === listId)
);

// selektor wszystkich list
export const getAllLists = listsSelector;

// ========================
// ACTION CREATORS
// ========================
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const clearSearchString = () => ({ type: 'CLEAR_SEARCHSTRING', });


// ========================
// REDUCER
// ========================
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

    case 'UPDATE_SEARCHSTRING':
      return {
        ...state,
        searchString: action.payload,
      };

    case 'ADD_LIST':
      return {
        ...state,
        lists: [
          ...state.lists,
          action.payload,
        ],
      };

    case 'CLEAR_SEARCHSTRING':
      return {
        ...state,
        searchString: '',
      };


    default:
      return state;
  }
};

// ========================
// STORE
// ========================
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
