import { createSlice } from "@reduxjs/toolkit";

const cabineSlice = createSlice({
  name: "cabines",
  initialState: {
    cabine: [],
  },

  reducers: {
    storeAllCabines: (state, actions) => {
      state.cabine = actions.payload;
    },

    addCabine: (state, action) => {
      state.cabine.push(action.payload);
    },
    removeCabine(state, action) {
      const id = action.payload;

      const indexToUpdate = state.posts.findIndex((p) => p.post_id == postId);

      if (indexToUpdate !== -1) {
        state.posts.splice(indexToUpdate, 1);
      }
    },
    editCabine(state, action) {
      const { post_id, updatedCabine } = action.payload;
      const indexToEdit = state.cabine.findIndex((c) => c.post_id === post_id);

      state.cabine[indexToEdit] = {
        ...state.cabine[indexToEdit],
        ...updatedCabine,
      };
    },
  },
});
export const getAllCabines = (state) => {
  return state.cabineStore.cabine;
};

export const { storeAllCabines, addCabine, removePost } = cabineSlice.actions;
export default cabineSlice.reducer;