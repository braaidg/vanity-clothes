import CATEGORIES_ACTIONS_TYPES from './category.types';

const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};

export default categoriesReducer;
