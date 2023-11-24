// doctors.js (contoh reducer)
const initialState = {
  doctorsList: [],
  loading: false,
  error: null,
};

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DOCTORS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DOCTORS_SUCCESS":
      return {
        ...state,
        loading: false,
        doctorsList: action.payload,
      };
    case "FETCH_DOCTORS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default doctorsReducer;
