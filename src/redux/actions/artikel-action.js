import axios from "axios";

export const fetchArtikels = () => {
  return async function (dispatch) {
    dispatchEvent(fetchArtikelsRequest());

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

export const fetchArtikelsSuccess = () => {
  return {
    type: "FETCH_ARTIKELS_SUCCESS",
    payload: artikels,
  };
};