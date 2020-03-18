import React from 'react';
import { Link } from "react-router-dom";

export const Item = ({ response, deleteItem }) => {

  return (
    <>
      {response.map(item => {
        const image = {
          backgroundImage: `url(https://openweathermap.org/img/wn/${item.icon}@2x.png)`
        }
        return (
          <>
            <li className="list-item" key={item.id}>
              <div className="list-item__temp">{item.temp}&deg;</div>
              <div className="list-item__img" style={image}></div>
              <button
                className="list-item__btn"
                onClick={() => deleteItem(item.id)}>
                <i className="fas fa-times"></i>
              </button>
              <div className="list-item__name">
                <span>{item.name}</span>
              </div>
              <Link
                to={{
                  pathname: "/expand",
                  state: { name: item.name }
                }}
                className="list-item__expand">
                more &nbsp;
              <i className="fas fa-angle-double-right"></i>
              </Link>
            </li>
            <style jsx>{`
            .list-item {
              background-color: rgb(255, 255, 255);
              border: 1px solid rgba(0, 0, 0, 0.2);
              border-radius: .5em;
              display: grid;
              justify-items: center;
              grid-template-columns: 4em 1fr 1fr 2em;
              grid-template-areas:
                  "temp . img button"
                  "city city expand expand"
              ;
            }
            .list-item__name {
              grid-area: city;
              justify-self: self-start;
              padding-left: .5em;
            }
            .list-item__temp {
                grid-area: temp;
                justify-self: self-end;
                font-size: 2em;
                color: rgb(0, 0, 0)
            }
            .list-item__img {
                grid-area: img;
                justify-self: self-end;
                height: 3em;
                width: 4em;
                background-size: cover;
            }
            .list-item__btn {
                grid-area: button;
                height: 1em;
                font-size: 1em;
                justify-self: self-end;
                padding-right: 0.5em;
                padding-top: 0.5em;
                border: none;
                background-color: inherit;
                cursor: pointer;
            }
            .list-item__expand {
                grid-area: expand;
                justify-self: self-end;
                padding-right: 0.5em;
                text-decoration: none;
                color: rgb(0, 0, 0);
            }
            @media (max-width: 640px) {
              .list-item {
                font-size: 0.6em;
              }
              .list-item__img {
                height: 3em;
              }
            }
            `}</style>
          </>
        );
      })}
    </>
  )
}