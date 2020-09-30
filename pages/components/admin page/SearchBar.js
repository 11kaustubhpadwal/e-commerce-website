import _ from "lodash";
import React, {
  useRef,
  useCallback,
  useEffect,
  useReducer,
  Fragment,
  useState,
} from "react";
import { Search, Label } from "semantic-ui-react";

const initialState = {
  loading: false,
  results: [],
  value: "",
};

function searchReducer(state, action) {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      return initialState;
  }
}

const resultRenderer = ({ name }) => (
  <Fragment>
    <Label color="black" horizontal content={name} size="large" />
    {/* <ProductDetails item={item} /> */}
  </Fragment>
);

const SearchBar = ({ products }) => {
  const { productsList } = products;

  const source = productsList;

  const [state, dispatch] = useReducer(searchReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = useRef();

  const handleSearchChange = useCallback(
    (e, data) => {
      clearTimeout(timeoutRef.current);
      dispatch({ type: "START_SEARCH", query: data.value });

      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          dispatch({ type: "CLEAN_QUERY" });
          return;
        }

        const re = new RegExp(_.escapeRegExp(data.value), "i");
        const isMatch = (result) => re.test(result.name);

        dispatch({
          type: "FINISH_SEARCH",
          results: _.filter(source, isMatch),
        });
      }, 300);
    },
    [productsList]
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleResultSelection = (data) => {
    dispatch({ type: "UPDATE_SELECTION", selection: data.result.name });
  };

  return (
    <Search
      loading={loading}
      onResultSelect={(e, data) => handleResultSelection(data)}
      onSearchChange={handleSearchChange}
      resultRenderer={resultRenderer}
      results={results}
      value={value}
      type="text"
      placeholder="e.g. cotton"
    />
  );
};

export default SearchBar;
