import { increment } from '../actions';

const rootReducer = (state, action) => {
  switch (action.type) {
    case increment().type:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
