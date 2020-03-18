import React, { useEffect } from "react";
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { Spinner } from "../spinner/spinner";
import { getGeoData } from "../../store/actions/geolocation";

export const GeoItem = () => {
  const geoWeather = useSelector(state => state.geoloc.geoWeather)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGeoData())
    // eslint-disable-next-line
  }, [])

  if (geoWeather) {
    const { name, temp, icon, desc } = geoWeather;
    return (
      <>
        <div className="geoLocItem">
          <div className="geoLocItem__temp">
            <span>{temp}&deg;</span>
          </div>
          <div className="geoLocItem__name">
            <span>{name}</span>
          </div>
          <div className="geoLocItem__img">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={`${desc}`}
            />
          </div>
          <div className="geoLocItem__expand">
            <Link href="/expand">
              <a href="/expand" className="geoLocItem__expand">
                more &nbsp;
              <i className="fas fa-angle-double-right"></i>
              </a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .geoLocItem {
            font-family: 'Roboto';
            display: grid;
            grid-template-columns: 1fr, 1fr;
            grid-template-rows: 1fr, 1fr;
            justify-items: center;
            grid-template-areas: 
                "temp img"
                "city link"
            ;
          }
          .geoLocItem__temp {
            grid-area: temp;
            font-size: 3em;
            color: rgb(0, 0, 0)
          }
          .geoLocItem__img {
              grid-area: img;
              justify-self: center;
          }
          .geoLocItem__name {
              grid-area: city;
          }
          .geoLocItem__expand {
              grid-area: link;
              text-decoration: none;
              color:rgb(0, 0, 0);
          }
          @media (max-width: 640px) {
            .geoLocItem {
              font-size: 0.6em;
            }
            .geoLocItem__img > img {
              height: 6em;
            }
          }
          `}</style>
      </>
    );
  } else {
    return (<Spinner />)
  }
}

