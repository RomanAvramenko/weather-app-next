import React from "react";
import { Header } from "../components/Header/Header";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { ItemList } from "../components/ItemList/ItemList";
import { GeoItem } from "../components/GeoItem/GeoItem";

const Index = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <SearchBar />
        <GeoItem />
        <ItemList />
      </div>
      <style jsx global>{`
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
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
        }
        .wrapper {
          max-width: 400px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Index;
