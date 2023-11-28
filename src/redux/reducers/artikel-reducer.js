const initialState = {
    listartikel: [],
    loading: false,
    error: null,
}

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
    default:
      return state;
  }
};

export default artikelReducer;