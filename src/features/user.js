import { createSlice } from "@reduxjs/toolkit";

export const userSclice = createSlice({ //create slice in store
  name: "user",
  initialState: {
    value: {
      name: "",
      age: 0,
      email: "",
    },
  },
  reducers:{
    login: (state, action) => {
        state.value = action.payload;
        
    },
    logout: (state, action) => {
        state.value={
            name: "",
            age: 0,
            email: "",
          }
    }
  }
});

export const {login,logout} = userSclice.actions;

export default userSclice.reducer;
