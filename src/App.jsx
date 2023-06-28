import Home from "./page/Home";
// import AppContext from "./context/AppContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { AccessContent } from "./context/AppContext";
import PageDetail from "./page/PageDetail";
import Layout from "./components/Layout";
import Rating from './page/product/Rating'
import Description from "./page/product/Description";
import Price from "./page/product/Price";


function App() {
  const { changePopUp, isPopUp} = AccessContent();
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        changePopUp(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(()=>{
    if(isPopUp){
      document.querySelector("body").style.overflowY="hidden";
    }

    return () => {
     document.querySelector("body").style.overflowY="auto"
    };
  })

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<PageDetail/>}>
            <Route index element={<Description/>}/>
            <Route path="price" element={<Price/>}/>
            <Route path="rating" element={<Rating/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
