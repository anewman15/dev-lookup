const filters = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      return {
        ...state,
        filters: {
          skill: action.payload.filter,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default filters;
