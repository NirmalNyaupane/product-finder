import { FETCHING_DATA, FULLFILLED, ERROR, SEARCHING, RESET
,PAGE_ERROR,PAGE_FETCHING_DATA,PAGE_FULLFILLED
} from "../actions";
const Reducer = (state, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isLoading: true,
      };

    case ERROR:
      return {
        ...state,
        isError: true,
        error: action.payload,
        isLoading: false,
      };

    case FULLFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case SEARCHING:
      return {
        ...state,
        search: state.data.filter((element) =>
          element.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case RESET:
      return {
        ...state,
        search: [],
      };
      
    default:
      return state;
  }
};


export const PageReducer = (state, action)=>{
    switch(action.type){
      case PAGE_ERROR:
        return{
            ...state, 
            isError:true,
            isLoading:false, 
            errror:action.payload
        }

      case PAGE_FETCHING_DATA:
        return{
          ...state, 
          isLoading:true
        }

      case PAGE_FULLFILLED:
        return{
          ...state, 
          isLoading:false, 
          data:action.payload
        }
    }
}
export default Reducer;
