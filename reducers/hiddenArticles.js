import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const hiddenArticlesSlice = createSlice({
 name: 'hiddenArticles',

  initialState,
    reducers: {
    addHiddenArticle : (state, action) => {
     state.value.push(action.payload);
   },
   removeHiddenArticle: (state) => {
    state.value=[];
  },
 },
});

export const { addHiddenArticle,removeHiddenArticle } = hiddenArticlesSlice .actions;
export default hiddenArticlesSlice.reducer;