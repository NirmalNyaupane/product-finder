import { createContext, useContext, useState } from "react";
import { useEffect, useReducer } from "react";
import Reducer,{PageReducer} from "./Reducer";
import { FakeStore } from "../api/FakeStore";
import { FETCHING_DATA, FULLFILLED, ERROR } from "../actions";

export const contextProvider = createContext(null);

const AppContext = ({ children }) => {

  const initialState = {
    isLoading: false,
    isError: false,
    error: "",
    data: [],
    search:[]
  };

  const [isPopUp, changePopUp] = useState(false);
  const [state, dispatch] = useReducer(Reducer, initialState);

  const pageInitialState = {
    isLoading: false,
    isError: false,
    error: "",
    data: {}
  }

  const [pageState, pageDispatch] = useReducer(PageReducer, pageInitialState);



  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: FETCHING_DATA });
        const { data } = await FakeStore.get("/products");
        dispatch({ type: FULLFILLED, payload: data});
      } catch (error) {
        dispatch({ type: ERROR, payload: error.message });
      }
    };
    fetchData();
  }, []);

  const contextValue = {
    isPopUp,
    changePopUp,
    state,
    dispatch,
    pageState, 
    pageDispatch,
  };


  return (
    <contextProvider.Provider value={contextValue}>
      {children}
    </contextProvider.Provider>
  );
};

export const AccessContent = () => {
  return useContext(contextProvider);
};

export default AppContext;
