// action types
const GET_BOOKS = "GET_BOOKS";
const SET_BOOKS = "SET_BOOKS";

export const initialBooksState = {
  results: [],
  query: "",
  isLoading: false,
};

// action creator
export function getBooks(query) {
  return { type: GET_BOOKS, payload: query };
}

export function setBooks(results) {
  return { type: SET_BOOKS, payload: results };
}

// reducer
export const getBooksReducer = (state = initialBooksState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_BOOKS: {
      return {
        ...state,
        query: payload,
        isLoading: true,
      };
    }

    case SET_BOOKS: {
      return { ...state, results: payload, isLoading: false };
    }

    default:
      return { ...state };
  }
};
