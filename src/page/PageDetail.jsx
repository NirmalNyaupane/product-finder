import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet, Link } from "react-router-dom";
import { FakeStore } from "../api/FakeStore";
import { AccessContent } from "../context/AppContext";
import { PAGE_ERROR, PAGE_FULLFILLED, PAGE_FETCHING_DATA } from "../actions";
import { CircularProgress } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PageDetail = () => {
  const { id } = useParams();
  const { pageState, pageDispatch } = AccessContent();

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        pageDispatch({ type: PAGE_FETCHING_DATA });
        const { data } = await FakeStore.get(`/products/${id}`);
        pageDispatch({ type: PAGE_FULLFILLED, payload: data });
      } catch (error) {
        pageDispatch({ type: PAGE_ERROR, payload: error.message });
      }
    };
    fetchData(id);
  }, [id]);

  if (pageState.isLoading) {
    return (
      <div className="w-full h-[100vh] flex place-items-center place-content-center">
        <CircularProgress />
      </div>
    );
  }

  if (pageState.isError) {
    return (
      <div className="w-full h-[100vh] flex place-items-center place-content-center">
        {pageState.error}
      </div>
    );
  }

  return (
    <>
      <div>
        <Link to="/" className="flex underline items-center text-x gap-2 font-bold">
          <AiOutlineArrowLeft />
          Back to all products
        </Link>
        <h2 className="font-bold text-2xl my-5">{pageState.data.title}</h2>
        <img
          src={pageState.data.image}
          className="w-[90%] md:w-[70%] h-[30rem] mx-auto object-cover"
        />
      </div>

      <div>
        <ul className="flex text-xl font-bold gap-3 my-8">
          <li className="pagelink">
            <NavLink end to={`/product/${id}`} className="hover:text-blue-500">
              Description
            </NavLink>
          </li>
          <li className="pagelink">
            <NavLink
              to={`/product/${id}/price`}
              className="hover:text-blue-500"
            >
              Price
            </NavLink>
          </li>
          <li className="pagelink">
            <NavLink
              to={`/product/${id}/rating`}
              className="hover:text-blue-500"
            >
              Rating
            </NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default PageDetail;
