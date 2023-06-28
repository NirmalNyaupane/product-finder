import { Link } from "react-router-dom";

const SingleCart = (props) => {
  const { category, description, id, image, price, title } = props.data;
  return (
    <div className="border bg-white rounded-md shadow-md">
      <div className="w-[200px] h-[200px] mx-auto">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-[200px] h-[200px] object-cover mx-auto rounded-md"
        />
      </Link>
      </div>
      <div className="bg-red-100 flex justify-between px-4 text-xl py-2">
        <h2 className="font-bold">{title.slice(0, 10)}...</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default SingleCart;
