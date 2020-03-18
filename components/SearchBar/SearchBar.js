import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchItem } from '../../store/actions/search'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [item, setItem] = useState('')

  const addItem = e => {
    dispatch(searchItem(item))
    setItem('')
    e.preventDefault();
  }

  return (
    <>
      <form className="search__form" onSubmit={addItem}>
        <label>
          <input
            type="text"
            className="search__form__input"
            placeholder="City Name"
            value={item}
            onChange={event => setItem(event.target.value.toLowerCase())}
          />
        </label>
        <input className="search__form__btn" type="submit" value="Add" />
      </form>
      <style jsx>{`
      .search__form {
        display: flex;
        margin: auto;
        height: 2.5em;
        width: 25em;
      }
      .search__form__input {
        border: none;
        height: 100%;
        flex-grow: 3;
        font-size: 1.5em;
        border-bottom-left-radius: 0.5em;
        padding-left: 0.5em;
        outline: none;
      }
      .search__form__btn {
        border: none;
        flex-grow: 1;
        background-color: #6C63FF;
        font-size: 1.2em;
        border-bottom-right-radius: 0.5em;
        color: #ffffff;
        text-transform: uppercase;
        padding: 0 0.5em;
        outline: none;
        cursor: pointer;
      }
      @media (max-width: 640px) {
        .search__form {
            width: 20em;
        }
        .search__form__input {
            flex-grow: 1;
            font-size: 1.2em;
        }
        .search__form__btn {
            font-size: 1em;
        }
      }
      `}</style>
    </>
  )
}