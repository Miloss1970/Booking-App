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

    loggOut: (state) => {
      state.user = null;
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
      //promenim funkciju

      const { id, updatedCabine } = action.payload;
      state.cabine = state.cabine.map((cabin) => {
        return cabin.id === id ? updatedCabine : cabin;
      });

      const indexToEdit = state.cabine.findIndex((c) => c.id === id);

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
  loggOut,
} = cabineSlice.actions;
export default cabineSlice.reducer;
