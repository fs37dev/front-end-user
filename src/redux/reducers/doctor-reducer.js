const initialState = {
  loading: false,
  data: "",
  errorMessage: "",
};

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOCTOR_LIST_REQUEST":
      return {
        ...state,
        loading: true,
        data: "",
        errorMessage: "",
      };
    case "GET_DOCTOR_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: "",
      };
    case "GET_DOCTOR_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
        data: "",
        errorMessage: "",
      };
    case "GET_DOCTOR_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default doctorsReducer;
