const username = (state = 'anewman15', action) => {
  switch (action.type) {
    case 'SAVE_USERNAME': {
      return action.payload.username;
    }
    default: {
      return state;
    }
  }
};

export default username;
