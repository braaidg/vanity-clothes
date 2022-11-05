import CATEGORIES_ACTIONS_TYPES from './category.types';

import createAction from '../../utils/reducer/reducer.utils';

const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_MAP, categoriesMap);

export default setCategoriesMap;
