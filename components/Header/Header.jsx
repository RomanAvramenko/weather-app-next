import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <>
      <header className="app-header">
        <div className="app-logo">
          <div className="img"></div>
          <Link href="/">
            <a href="/">WA</a>
          </Link>
        </div>
      </header>
      <style jsx>{`
        .app {
          text-align: center;
        }
        .app-logo {
            display: flex;
            flex-direction: row;
        }
        a {
          font-family:'Roboto';
          text-decoration: none;
          color: white;
          font-size: 2em;
        }
        .img {
          background-image: url(./images/undraw_weather_app_i5sm.png);
          background-size: cover;
          height: 2.5em;
          width: 2.5em;
          margin: auto 1em;
        }
        .app-header {
            background-color: #282c34;
            width: 100vw;
            height: 3em;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
        }
      `}</style>
    </>
  )
}