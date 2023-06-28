import { AccessContent } from "../../context/AppContext";
const Price = () => {
  const { pageState, pageDispatch } = AccessContent();
  return (
    <div className="text-2xl my-5">
      ${pageState.data.price}
    </div>
  )
}

export default Price;