import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../Item/Item";
import { itemListGetData } from "../../store/actions/itemList";

export const ItemList = () => {
  const dispatch = useDispatch();
  const { inputItem } = useSelector(state => state.search);

  useEffect(() => {
    dispatch(itemListGetData());
    // eslint-disable-next-line
  }, [inputItem]);

  return (
    <>
      <div className="box">
        <ul className="box__list">
          <Item />
        </ul>
      </div>
      <style jsx>{`
        .box {
          display: flex;
          flex-direction: column;
          margin: auto;
          width: 25em;
        }
        .box__list {
          max-width: 25em;
          width: 100%;
          border-radius: 5px;
          font-size: 1.3em;
          padding: 0;
        }
        @media (max-width: 640px) {
          .box {
            width: 20em;
          }
        }
      `}</style>
    </>
  );
};
