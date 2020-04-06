import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../components/spinner/spinner";
import { getData } from "../store/actions/expand";
import { ExpandForecast } from "../components/ExpandForecast/ExpandForecast";
import { ExpandPicture } from "../components/ExpandPicture/ExpandPicture";
import { Header } from "../components/Header/Header";
import Router from "next/router";

const Expand = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.expand);

  useEffect(() => {
    const state = Router.router.query.name;
    if (Router.router) {
      window.addEventListener(
        "beforeunload",
        window.sessionStorage.setItem("key", state)
      );
    }
    const loadData = undefined;
    const stateCheck = loadData ? state : window.sessionStorage.getItem("key");
    dispatch(getData(stateCheck));
    // eslint-disable-next-line
  }, []);

  const renderChild = () => {
    return (
      <>
        <Header />
        <ExpandForecast />
        <ExpandPicture />
        <style jsx global>
          {`
            @font-face {
              font-family: "Roboto";
              src: url("/public/fonts/Roboto-Regular.ttf");
            }
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              background-color: #d8d8d8;
              font-family: "Roboto";
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          `}
        </style>
      </>
    );
  };

  return loading ? <Spinner /> : renderChild();
};

export default Expand;
