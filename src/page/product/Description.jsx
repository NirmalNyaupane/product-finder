import { AccessContent } from "../../context/AppContext";
const Description = () => {
  const { pageState } = AccessContent();
  return (
    <div>
      <div className="text-xl leading-10">{pageState.data.description}</div>
      <div className="text-xl my-3">Catagory</div>
      <div>
        <button type="button" className="text-xl capitalize border border-black p-1 rounded-md mb-6">{pageState.data.category}</button>
      </div>
    </div>
  );
};

export default Description;
