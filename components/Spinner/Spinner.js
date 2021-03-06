import React from "react";

export const Spinner = () => {
  return (
    <>
      <div className="spinner-wrapper">
        <div className="spinner">
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spinner {
          0% {
            opacity: 1;
            backface-visibility: hidden;
            transform: translateZ(0) scale(1.5, 1.5);
          }
          100% {
            opacity: 0;
            backface-visibility: hidden;
            transform: translateZ(0) scale(1, 1);
          }
        }
        .spinner-wrapper {
          width: 200px;
          height: 200px;
          overflow: hidden;
          background: #d8d8d8;
          margin: 0 auto;
        }
        .spinner div > div {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #6c63ff;
          animation: spinner 1s linear infinite;
        }
        .spinner div:nth-child(1) > div {
          left: 148px;
          top: 88px;
          animation-delay: -0.875s;
        }
        .spinner > div:nth-child(1) {
          transform: rotate(0deg);
          transform-origin: 160px 100px;
        }
        .spinner div:nth-child(2) > div {
          left: 130px;
          top: 130px;
          animation-delay: -0.75s;
        }
        .spinner > div:nth-child(2) {
          transform: rotate(45deg);
          transform-origin: 142px 142px;
        }
        .spinner div:nth-child(3) > div {
          left: 88px;
          top: 148px;
          animation-delay: -0.625s;
        }
        .spinner > div:nth-child(3) {
          transform: rotate(90deg);
          transform-origin: 100px 160px;
        }
        .spinner div:nth-child(4) > div {
          left: 46px;
          top: 130px;
          animation-delay: -0.5s;
        }
        .spinner > div:nth-child(4) {
          transform: rotate(135deg);
          transform-origin: 58px 142px;
        }
        .spinner div:nth-child(5) > div {
          left: 28px;
          top: 88px;
          animation-delay: -0.375s;
        }
        .spinner > div:nth-child(5) {
          transform: rotate(180deg);
          transform-origin: 40px 100px;
        }
        .spinner div:nth-child(6) > div {
          left: 46px;
          top: 46px;
          animation-delay: -0.25s;
        }
        .spinner > div:nth-child(6) {
          transform: rotate(225deg);
          transform-origin: 58px 58px;
        }
        .spinner div:nth-child(7) > div {
          left: 88px;
          top: 28px;
          animation-delay: -0.125s;
        }
        .spinner > div:nth-child(7) {
          transform: rotate(270deg);
          transform-origin: 100px 40px;
        }
        .spinner div:nth-child(8) > div {
          left: 130px;
          top: 46px;
          animation-delay: 0s;
        }
        .spinner > div:nth-child(8) {
          transform: rotate(315deg);
          transform-origin: 142px 58px;
        }
        .spinner {
          width: 100%;
          height: 100%;
          position: relative;
          transform: translateZ(0) scale(1);
          backface-visibility: hidden;
          transform-origin: 0 0;
        }
        .spinner div {
          box-sizing: content-box;
        }
        @media (max-width: 640px) {
          .spinner-wrapper {
            width: 100px;
            height: 100px;
          }
          .spinner div > div {
            width: 12px;
            height: 12px;
          }
          .spinner div:nth-child(1) > div {
            left: 120px;
            top: 88px;
          }
          .spinner div:nth-child(2) > div {
            left: 102px;
            top: 130px;
          }
          .spinner div:nth-child(3) > div {
            left: 60px;
            top: 148px;
          }
          .spinner div:nth-child(4) > div {
            left: 18px;
            top: 130px;
          }
          .spinner div:nth-child(5) > div {
            left: 0px;
            top: 88px;
          }
          .spinner div:nth-child(6) > div {
            left: 18px;
            top: 46px;
          }
          .spinner div:nth-child(7) > div {
            left: 60px;
            top: 28px;
          }
          .spinner div:nth-child(8) > div {
            left: 102px;
            top: 46px;
          }
          .spinner {
            transform: translateX(-50%) translateY(-50%);
          }
        }
      `}</style>
    </>
  );
};
