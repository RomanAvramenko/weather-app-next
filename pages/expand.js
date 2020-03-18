import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Spinner } from "../components/spinner/spinner"
import { getData } from '../store/actions/expand'
import { ExpandForecast } from "../components/ExpandForecast/ExpandForecast"
import { ExpandPicture } from "../components/ExpandPicture/ExpandPicture"

const Expand = ({ location }) => {

  const dispatch = useDispatch()
  const { expandForecast, imageResp } = useSelector(state => state.expand)

  useEffect(() => {
    dispatch(getData(location))
    // eslint-disable-next-line
  }, [location])

  const renderChild = () => {
    return (
      <>
        <ExpandForecast />
        <ExpandPicture />
      </>
    )
  }

  return (
    !expandForecast || !imageResp
      ? <Spinner />
      : renderChild()
  )
}

export default Expand