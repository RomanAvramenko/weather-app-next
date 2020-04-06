import {
  EXPAND_FORECAST_DATA_SUCCESS,
  EXPAND_FORECAST_DATA_START,
  EXPAND_FORECAST_DATA_ERROR,
} from "../types";

const initialState = {
  loading: false,
  expandForecast: null,
  imageResp: [],
  error: null,
};

export const expandReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_FORECAST_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case EXPAND_FORECAST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        expandForecast: action.forecastData,
        imageResp: action.forecastImage,
      };
    case EXPAND_FORECAST_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
