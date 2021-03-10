const filters = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      return {
        ...state,
        skill: action.payload.filter,
      };
    }
    default: {
      return state;
    }
  }
};

export default filters;
