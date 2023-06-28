import {
  AiOutlineSearch,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineEnter,
} from "react-icons/ai";
import { AccessContent } from "../context/AppContext";
import { useState, useRef, useEffect } from "react";
import { SEARCHING, RESET } from "../actions";
import { useNavigate } from "react-router-dom";
const PopUpSearch = () => {
  const { changePopUp, dispatch, state } = AccessContent();
  const resultContainer = useRef();
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const navigate = useNavigate();
  //handle click or enter button
  const handleSelect = (id) => {
    changePopUp(false);
    dispatch({ type: RESET });

    navigate(`/product/${id}`);
  };

  //handle search
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value.length < 1) {
      dispatch({ type: RESET });
      return;
    }

    dispatch({ type: SEARCHING, payload: value });
  };

  //handling key down functionalities
  const handleKeyDown = (e) => {
    const key = e.key;
    let nextIndexCount = 0;

    //move down
    if (key === "ArrowDown") {
      nextIndexCount = (focusedIndex + 1) % state.search.length;
    }

    //move up
    if (key === "ArrowUp") {
      nextIndexCount = (focusedIndex - 1) % state.search.length;
    }

    //hide search result
    if (key === "Escape") {
      changePopUp(false);
    }

    //Implementing enter search logic
    if (key === "Enter") {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < state.search.length) {
        handleSelect(focusedIndex);
      }
    }
    setFocusedIndex(nextIndexCount);
  };

  //Hide result on click outside
  const resetSearch = () => {
    changePopUp(false);
  };

  //finding element when up and down button is click
  useEffect(() => {
    if (!resultContainer.current) return;
    resultContainer.current.scrollIntoView({
      block: "end",
    });
  }, [focusedIndex]);

  return (
    <div
      className="popup container mx-auto p-6 h-[100vh] w-[100vw] flex justify-center 
      items-center absolute top-0 left-0 bg-blur-background"
      onBlur={resetSearch}
    >
      <div className="bg-white py-5 px-12 w-1/2 rounded-md">
        <div
          className="input-field flex flex-row-reverse place-items-center 
        border-2 border-blue-600 rounded-md"
          tabIndex={1}
          onKeyDown={handleKeyDown}
        >
          <input
            type="text"
            placeholder="Search"
            id="popup-search"
            className="w-full focus:outline-none"
            autoFocus={true}
            onChange={handleSearch}
          />
          <label htmlFor="popup-search" className="px-4 text-xl py-2">
            <AiOutlineSearch />
          </label>
        </div>

        <div className="my-2 max-h-[60vh] overflow-y-auto">
          {state.search.map((element, indx) => {
            return (
              <div
                key={element.id}
                ref={focusedIndex === indx ? resultContainer : null}
                onMouseDown={() => handleSelect(element.id)}
                className={`border-2 p-2 my-2 rounded hover:border-blue-500 
              hover:text-blue-500 hover:transition-all hover:delay-75 ${
                focusedIndex === indx ? "border-blue-500" : "border-gray-200"
              }`}
              >
                <span className="text-blue-400 mx-2">#</span>
                {element.title}
              </div>
            );
          })}
        </div>

        <div className="search-bar-bottom-items flex space-x-2 place-items-center mt-8">
          <kbd className="border border-gray-300 text-gray-700 py-1 px-3 bg-gray-100 shadow-sm rounded">
            <AiOutlineArrowUp />
          </kbd>
          <kbd className="border border-gray-300 text-gray-700 py-1 px-3 bg-gray-100 shadow-sm rounded">
            <AiOutlineArrowDown />
          </kbd>
          <span>to navigate</span>
          <kbd className="border border-gray-300 text-gray-700 py-1 px-3 bg-gray-100 shadow-sm rounded">
            <AiOutlineEnter />
          </kbd>
          <span>to select</span>
          <kbd className="border border-gray-300 text-gray-700 py-1 px-3 bg-gray-100 shadow-sm rounded text-[0.8rem]">
            ESC
          </kbd>
          <span>to close</span>
        </div>
      </div>
    </div>
  );
};
export default PopUpSearch;
