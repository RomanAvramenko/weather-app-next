import React from 'react'
import Link from 'next/link'
import { Provider } from 'react-redux'
import { Header } from '../components/Header/Header'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { ItemList } from '../components/ItemList/ItemList'
import { store } from '../store/store'
import { GeoItem } from '../components/GeoItem/GeoItem'

const Index = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="wrapper">
        <SearchBar />
        <GeoItem />
        <ItemList />
      </div>
      <style jsx>{`
        @font-face {
          font-family: 'Roboto';
              src: url('/public/fonts/Roboto-Regular.ttf');
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #d8d8d8;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
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
    </Provider>
  )
}

export default Index