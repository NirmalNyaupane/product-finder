import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <nav className="flex justify-between my-10">
      <h1>
        <Link to="/" className="font-bold text-2xl">
          <span className="text-blue-500">Product</span>
          <span className="text-yellow-500">Finder</span>
        </Link>
      </h1>

        <SearchBar />
    </nav>
  );
};

export default Navbar;
