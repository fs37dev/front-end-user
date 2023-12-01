const initialState = {
  loading: false,
  isAuthenticatedLogin: false,
  isAuthenticatedRegister: false,
  data: "",
  errorMessage: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
    case "REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: false,
        data: "",
        errorMessage: "",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: true,
        isAuthenticatedRegister: false,
        data: "",
        errorMessage: "",
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: true,
        data: "",
        errorMessage: "",
      };
    case "LOGIN_FAILURE":
    case "REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: false,
        data: "",
        errorMessage: action.payload,
      };

    case "GET_USER_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: false,
        data: "",
        errorMessage: "",
      };

    case "GET_USER_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: true,
        isAuthenticatedRegister: false,
        data: action.payload,
        errorMessage: "",
      };

    case "GET_USER_DETAIL_REQUEST_FAILURE":
      console.info(action.payload);
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: false,
        data: "",
        errorMessage: "",
      };
    case "CLEAR_STATE":
      return {
        ...state,
        loading: false,
        isAuthenticatedLogin: false,
        isAuthenticatedRegister: false,
        data: "",
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default userReducer;
