import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);
// method export
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.currentUser;
  }
);

export const selectCurrentUser = (state) => state.user.currentUser;
