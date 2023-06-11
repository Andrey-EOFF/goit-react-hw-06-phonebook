import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    saveContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});



export const { saveContact, deleteContact, updateFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;


// SELECTORS !!!!!!!!!!!!!!!!!!!!!!!!!!

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;