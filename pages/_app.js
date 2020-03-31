import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";

const WeatherApp = ({ Component, pageProps }) => {
  return (
    <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  );
};

export default WeatherApp;
