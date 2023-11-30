const initialState = {
  listartikel: [],
  loading: false,
  error: null,
  artikelDetail: null,
};

const artikelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ARTIKELS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_ARTIKELS_SUCCESS":
      return {
        ...state,
        loading: false,
        listartikel: action.payload,
      };
    case "FETCH_ARTIKEL_DETAIL_SUCCESS":
      return {
        ...state,
        artikelDetail: action.payload.artikelDetail,
        error: null,
      };
    case "FETCH_ARTIKEL_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default artikelReducer;
