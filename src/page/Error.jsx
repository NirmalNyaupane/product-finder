import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
  return (
    <div className="h-[80vh] flex flex-col place-items-center place-content-center">
      <h2 className="font-bold text-3xl">
        Sorry the page you were looking for was not found
      </h2>
      <div>
        <button className="border bg-black text-white 
        text-xl py-2 px-20 rounded-lg my-9"
        onClick={()=>navigate("/")}
        >
          Return to home
        </button>
      </div>
    </div>
  );
};

export default Error;
