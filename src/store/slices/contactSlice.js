import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  name: '',
  phone: '',
  address: '',
};

const contactSlice = createSlice({
  name: 'contactSlice',
  initialState: contactInitialState,
  reducers: {
    setFields(state, action) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
    },
  },
});

export const contactActions = contactSlice.actions;

export default contactSlice.reducer;
