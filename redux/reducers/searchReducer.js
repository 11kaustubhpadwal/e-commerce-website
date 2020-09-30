import {
  START_SEARCH,
  CLEAN_QUERY,
  UPDATE_SELECTION,
  FINISH_SEARCH,
} from "../types";

const initialState = {
  loading: false,
  results: [],
  value: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CLEAN_QUERY":
      return state;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      return state;
  }
};