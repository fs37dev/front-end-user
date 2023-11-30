import axios from "axios";

export const fetchArtikels = () => {
  return async function (dispatch) {
    dispatch(fetchArtikelsRequest());

    const response = await axios.get(
      "https://back-end-production-a31e.up.railway.app/api/articles"
    );
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
      const response = await axios.get(
        `https://back-end-production-a31e.up.railway.app/api/articles/${id}`
      );
      dispatch(fetchArtikelDetailSuccess(response.data));
    } catch (error) {
      dispatch(fetchArtikelDetailFailure(error.message));
    }
  };
};

export const fetchArtikelDetailSuccess = (artikelDetail) => {
  return {
    type: "FETCH_ARTIKEL_DETAIL_SUCCESS",
    payload: artikelDetail,
  };
};

export const fetchArtikelDetailFailure = (error) => {
  return {
    type: "FETCH_ARTIKEL_DETAIL_FAILURE",
    payload: error,
  };
};