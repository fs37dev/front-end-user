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
        listartikel: [],
        loading: true,
        error: null,
        article: null,
      };
    case "FETCH_ARTIKELS_SUCCESS":
      return {
        ...state,
        listartikel: action.payload,
        loading: false,
        error: null,
        article: null,
      };
    case "FETCH_ARTIKEL_DETAIL_SUCCESS":
      return {
        ...state,
        listartikel: [],
        loading: false,
        error: null,
        article: action.payload.article,
      };
    case "FETCH_ARTIKEL_DETAIL_REQUEST":
      return {
        ...state,
        listartikel: [],
        loading: true,
        error: null,
        article: null,
      };
    case "FETCH_ARTIKEL_DETAIL_FAIL":
      return {
        ...state,
        listartikel: [],
        loading: false,
        error: action.payload.message,
        article: null,
      };
    case "CLEAR_STATE_ARTICLE":
      return {
        ...state,
        listartikel: [],
        loading: true,
        error: null,
        article: null,
      };
    default:
      return state;
  }
};

export default artikelReducer;
