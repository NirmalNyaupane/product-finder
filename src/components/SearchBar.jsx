import { AiOutlineSearch } from "react-icons/ai";
import { AccessContent } from "../context/AppContext";
import PopUpSearch from "./PopUpSearch";

const SearchBar = () => {
  const { isPopUp, changePopUp } = AccessContent();
  return (
    <>
    {isPopUp&&<PopUpSearch/>}
      <div
        className="search-bar hidden md:flex place-items-center bg-gray-100 w-fit p-1 rounded-md"
      >
        <label htmlFor="search" className="text-2xl mx-3 text-gray-400">
          <AiOutlineSearch />
        </label>
        <input
          type="text"
          placeholder="Search"
          id="search"
          className="bg-gray-100 focus:outline-none w-[15rem]"
          onFocus={()=>changePopUp(true)}
        />
        <label
          htmlFor="search"
          className="border border-gray-300 p-[0.2rem] mx-2 rounded"
        >
          <kbd className="text-gray-500">CTRL K</kbd>
        </label>
      </div>

      <div className="text-2xl md:hidden text-gray-600"
      onClick={()=>changePopUp(true)}
      >
        <AiOutlineSearch/>
      </div>
    </>
  );
};

export default SearchBar;
