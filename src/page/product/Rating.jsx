 import { AccessContent } from "../../context/AppContext";
 const Rating = () => {
  const{pageState} = AccessContent();
  console.log(pageState);
  return (
    <div>
      <div className="text-xl">Total Rating: {pageState.data.rating.count}</div>
      <div className="text-xl my-3">Rating: {pageState.data.rating.rate}</div>
    </div>
  )
}

export default Rating;