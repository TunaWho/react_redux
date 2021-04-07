import { createSlice } from "@reduxjs/toolkit";
import { data } from "../FireBaseConnect";
const initialState = {
  notes: [],
  visible: false,
  EditObject: {},
};

const NewSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      state.notes.push(action.payload);
      data.push(action.payload);
    },
    formVisible: (state, action) => {
      state.visible = action.payload;
    },
    getEditData: (state, action) => {
      state.EditObject = action.payload;
    },
    editData: (state, action) => {
      data.child(action.payload.id).update({
        title: action.payload.title,
        content: action.payload.content,
      });
      state.notes = [...state.notes, action.payload];
    },
  },
});

export const {
  addNotes,
  formVisible,
  getEditData,
  editData,
} = NewSlice.actions;
export default NewSlice.reducer;
