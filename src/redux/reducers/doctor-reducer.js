const initialState = {
  doctorsList: [],
  doctor: "",
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
    case "FETCH_DOCTOR_SUCCESS":
      return {
        ...state,
        loading: false,
        doctor: action.payload.doctor,
      };
    default:
      return state;
  }
};

export default doctorsReducer;
