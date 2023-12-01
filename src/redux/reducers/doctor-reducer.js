const initialState = {
  doctors: "",
  doctor: "",
  loading: false,
  error: "",
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
    case "FETCH_DOCTOR_SUCCESS":
      return {
        ...state,
        loading: false,
        doctor: action.payload.doctor,
      };
    case "CLEAR_STATE_DOCTOR":
      return {
        ...state,
        doctorsList: [],
        doctor: "",
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default doctorsReducer;
