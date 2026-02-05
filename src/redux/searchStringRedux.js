// selectors
export const getSearchString = ({ searchString }) => searchString;

// action names
const createActionName = actionName => `app/search/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');
const CLEAR_SEARCHSTRING = createActionName('CLEAR_SEARCHSTRING');

// action creators
export const updateSearchString = payload => ({
  type: UPDATE_SEARCHSTRING,
  payload,
});

export const clearSearchString = () => ({
  type: CLEAR_SEARCHSTRING,
});

// reducer
const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    case CLEAR_SEARCHSTRING:
      return '';
    default:
      return statePart;
  }
};

export default searchStringReducer;
