import axios from "axios";

export const fetchArtikels = () => {
  return async function (dispatch) {
    dispatch(fetchArtikelsRequest());

    const response = await axios.get("https://localhost:3000/api/articles");
    const artikels = response.data;
    dispatch(fetchArtikelsSuccess(artikels));
  };
};

export const fetchArtikelsRequest = () => {
  return {
    type: "FETCH_ARTIKELS_REQUEST",
  };
};

export const fetchArtikelsSuccess = (artikels) => {
  return {
    type: "FETCH_ARTIKELS_SUCCESS",
    payload: artikels,
  };
};

export const fetchArtikelDetail = (id) => {
  return async function (dispatch) {
    try {
      dispatch(fetchArtikelDetailRequest());

      const response = await axios.get(`https://localhost:3000/api/articles/${id}`);
      dispatch({
        type: "FETCH_ARTIKEL_DETAIL_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_RESERVATION_DETAIL_FAIL",
        payload: error.response.data,
      });
    }
  };
};

export const fetchArtikelDetailSuccess = (artikels) => {
  return {
    type: "FETCH_ARTIKEL_DETAIL_SUCCESS",
    payload: artikels,
  };
};

export const fetchArtikelDetailRequest = () => {
  return {
    type: "FETCH_ARTIKEL_DETAIL_REQUEST",
  };
};

export const clearStateArticle = () => {
  return {
    type: "CLEAR_STATE_ARTICLE",
  };
};
