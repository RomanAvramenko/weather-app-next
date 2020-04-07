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
  const { expandForecast, imageResp } = useSelector(
    (state) => state.expand
  );

  useEffect(() => {
    const state = Router.router.query.name;
    dispatch(getData(state));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      {!expandForecast ? <Spinner /> : <ExpandForecast />}
      {imageResp.length === 0 ? <Spinner /> : <ExpandPicture />}

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

export default Expand;
