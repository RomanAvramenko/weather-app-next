import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

export const ExpandPicture = () => {
  const { imageResp } = useSelector(state => state.expand)
  const randPicture = Math.floor(Math.random() * 9);
  const bgImage = {
    backgroundImage: `url(${imageResp[randPicture].urls.small})`
  }
  return (
    <>
      <div
        className="picture"
        key={imageResp[0].id}
        style={bgImage}
      >
      </div >
      <style jsx>{`
        .picture {
          height: 400px;
          width: 400px;
          display: flex;
          margin: auto;
          border-radius: 8px;
          background-size: cover;
          background-position: 50% 50%;
        }
        @media (max-width: 640px) {
            .picture {
                width: 100vw;
            }
        }
      `}</style>
    </>
  );
}

ExpandPicture.propTypes = {
  imageResp: PropTypes.arrayOf(PropTypes.object)
}