import { AccessContent } from "../context/AppContext";
import SingleCart from "../components/SingleCart";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

const Home = () => {
  const { state, dispatch, isPopUp, changePopUp } = AccessContent();
  const priceRange = [20, 50, 100, 200, 500, 700, 1000, 5000];
  const [filter, changeFilter] = useState({
    price: 0,
    category: "none",
  });

  const setFilter = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    changeFilter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const catagoryFind = () => {
    const uniqueArray = state.data.reduce(
      (accumulator, currentValue) => {
        if (!accumulator.includes(currentValue.category)) {
          accumulator.push(currentValue.category);
        }
        return accumulator;
      },
      ["none"]
    );

    return uniqueArray;
  };

  const transformProduct = () => {
    let transFormArray = state.data;

    if (filter.price > 0) {
      transFormArray = state.data.filter(
        (element) => element.price < filter.price
      );
    }

    if (filter.category != "none") {
      transFormArray = state.data.filter(
        (element) => element.category === filter.category
      );
    }

    return transFormArray;
  };

  const clearFilter = () => {
    changeFilter(() => {
      return {
        price: 0,
        category: "none",
      };
    });
  };

  if (state.isLoading) {
    return (
      <div className="w-full h-[100vh] flex place-items-center place-content-center">
        <CircularProgress />
      </div>
    );
  }

  if (state.isError) {
    return (
      <div className="w-full h-[100vh] flex place-items-center place-content-center">
        {state.error}
      </div>
    );
  }

  return (
    <>
      <div className="filter">
        <h2 className="text-xl font-bold mb-2">Filters</h2>
        <hr />
        <div className="flex gap-3 my-3">
          <div className="price">
            <label htmlFor="price">Price</label>
            <br />
            <select
              className="py-1 px-3 rounded-md"
              id="price"
              onChange={setFilter}
              name="price"
            >
              <option value={0}>None</option>
              {priceRange.map((element) => {
                return (
                  <option
                    key={element}
                    className="capitalize"
                    value={element}
                    selected={element == filter.price ? true : false}
                  >
                    Less than ${element}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="catagory">
            <label htmlFor="category">Category</label>
            <br />
            <select
              className="py-1 px-3 rounded-md"
              id="category"
              name="category"
              onChange={setFilter}
            >
              {catagoryFind().map((element) => {
                return (
                  <option key={element} value={element} selected={element == filter.category ? true : false}>
                    {element[0].toUpperCase() + element.substr(1)}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mt-auto ml-auto">
            <button
              className="bg-blue-700 text-white px-2 py-1 rounded-md shadow-md"
              onClick={clearFilter}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-3 my-6 gap-4">
        {transformProduct()?.map((element) => {
          return <SingleCart key={element.id} data={element} />;
        })}
      </div>
    </>
  );
};

export default Home;
