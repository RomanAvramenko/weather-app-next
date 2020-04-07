import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

export const ExpandForecast = () => {
  const forecast = useSelector(state => state.expand.expandForecast);
  const id = forecast.id
  const name = forecast.name
  const list = forecast.list
  const _imgUrl = "https://openweathermap.org/img/wn/";
  const weatherIcon = (index) =>
    `${_imgUrl}${list[index].weather[0].icon}@2x.png`;
  return (
    <>
      <section className="expand" key={id}>
        <h1 className="expand__name">{name.toUpperCase()}</h1>
        <ul className="expand__list">
          <div className="expand__list__item">
            {moment(list[0].dt_txt).format("dddd")}
            <div>
              {list[0].main.temp.toFixed()}&deg;/
              {list[1].main.temp.toFixed()}&deg;
            </div>
            <div>
              <img className="icon" src={weatherIcon(1)} alt="" />
            </div>
            <div>{list[1].weather[0].description}</div>
          </div>
          <div className="expand__list__item">
            <div>{moment(list[2].dt_txt).format("dddd")}</div>
            <div>
              {list[2].main.temp.toFixed()}&deg;/
              {list[3].main.temp.toFixed()}&deg;
            </div>
            <div>
              <img className="icon" src={weatherIcon(3)} alt="" />
            </div>
            <div>{list[3].weather[0].description}</div>
          </div>
          <div className="expand__list__item">
            <div>{moment(list[4].dt_txt).format("dddd")}</div>
            <div>
              {list[4].main.temp.toFixed()}&deg;/
              {list[5].main.temp.toFixed()}&deg;
            </div>
            <div>
              <img className="icon" src={weatherIcon(5)} alt="" />
            </div>
            <div>{list[5].weather[0].description}</div>
          </div>
          <div className="expand__list__item">
            <div>{moment(list[6].dt_txt).format("dddd")}</div>
            <div>
              {list[6].main.temp.toFixed()}&deg;/
              {list[7].main.temp.toFixed()}&deg;
            </div>
            <div>
              <img className="icon" src={weatherIcon(7)} alt="" />
            </div>
            <div>{list[7].weather[0].description}</div>
          </div>
          <div className="expand__list__item">
            <div>{moment(list[8].dt_txt).format("dddd")}</div>
            <div>
              {list[8].main.temp.toFixed()}&deg;/
              {list[list.length - 1].main.temp.toFixed()}&deg;
            </div>
            <div>
              <img className="icon" src={weatherIcon(list.length - 1)} alt="" />
            </div>
            <div>{list[list.length - 1].weather[0].description}</div>
          </div>
        </ul>
      </section>
      <style jsx>{`
        .expand {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: bold;
          font-stretch: extra-condensed;
          margin-top: 40px;
        }
        .expand__name {
          display: flex;
          justify-content: center;
        }
        .expand__list {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-top: 40px;
        }
        .expand__list__item {
          margin: 10px;
          height: 200px;
          text-align: center;
          align-content: space-between;
        }
        @media (max-width: 640px) {
          .expand {
            margin: 0;
          }
          .expand__list {
            font-size: 0.8em;
            margin-top: 1em;
          }
          .expand__list__item {
            margin: 0em;
            height: 13em;
            width: 6em;
          }
          .icon {
            width: 7em;
          }
        }
      `}</style>
    </>
  );
};