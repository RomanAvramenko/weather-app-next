import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";

const WeatherApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default WeatherApp;
