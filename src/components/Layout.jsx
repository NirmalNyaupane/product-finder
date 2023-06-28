import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = () => {
  return (
    <main className="h-[100vh] flex flex-col">
      <div className="w-[95%] max-w-[1000px] mx-auto ">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
