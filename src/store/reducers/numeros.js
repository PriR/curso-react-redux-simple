const initialState = {
  min: 1,
  max: 10,
};

const numeroReducer = (state = initialState, action) => {
  // se n for passado estado, o padrão é initialState
  switch (action.type) {
    case "NUM_MIN_ALTERADO": {
      return {
        ...state,
        min: action.payload,
      };
    }
    case "NUM_MAX_ALTERADO": {
      return {
        ...state,
        max: action.payload,
      };
    }
    default:
      return initialState;
  }
};

export default numeroReducer;
