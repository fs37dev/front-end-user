const initialState = {
  listartikel: [],
  loading: false,
  error: null,
  article: null,
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
        article: action.payload.article,
        error: null,
      };
    case "FETCH_ARTIKEL_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_ARTIKEL_DETAIL_FAIL":
      return {
        ...state,
        loading: false,
        artikels: null,
        error: action.payload.message,
      };
    case "CLEAR_STATE_ARTICLE":
      return {
        ...state,
        listartikel: [],
        loading: false,
        error: null,
        article: null,
      };
    default:
      return state;
  }
};

export default artikelReducer;
