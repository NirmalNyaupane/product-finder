import { AccessContent } from "../context/AppContext";
import SingleCart from "../components/SingleCart";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const { state, dispatch, isPopUp, changePopUp } = AccessContent();

  const catagoryFind = () => {
    const uniqueArray = state.data.reduce(
      (accumulator, currentValue) => {
        if (!accumulator.includes(currentValue.category)) {
          accumulator.push(currentValue.category);
        }
        return accumulator;
      },
      ["None"]
    );

    return uniqueArray;
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
          <label htmlFor="price">Price</label><br/>
            <select className="py-1 px-3" id="price">
              {catagoryFind().map((element) => {
                return (
                  <option key={element} className="capitalize">
                    {element}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="catagory">
          <label htmlFor="category">Category</label><br/>
            <select className="py-1 px-3" id="category">
              {catagoryFind().map((element) => {
                return (
                  <option key={element} className="capitalize">
                    {element}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mt-auto ml-auto">
            <button className="bg-blue-700 text-white px-2 py-1 rounded-md shadow-md">Apply Filters</button>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-3 my-6 gap-4">
        {state.data?.map((element) => {
          return <SingleCart key={element.id} data={element} />;
        })}
      </div>
    </>
  );
};

export default Home;
