import { createSlice } from "@reduxjs/toolkit";

const cabineSlice = createSlice({
  name: "cabines",
  initialState: {
    cabine: [],
    user: null,
  },

  reducers: {
    storeAllCabines: (state, actions) => {
      state.cabine = actions.payload;
    },

    storeUser: (state, actions) => {
      state.user = actions.payload;
    },

    createCabine: (state, action) => {
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
      const { id, updatedCabine } = action.payload;
      const indexToEdit = state.cabine.findIndex((c) => c.id === id);
      console.log(indexToEdit, updatedCabine);
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

export const {
  storeAllCabines,
  storeUser,
  createCabine,
  removePost,
  editCabine,
} = cabineSlice.actions;
export default cabineSlice.reducer;
