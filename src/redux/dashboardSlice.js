import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  CPSM:[],
  CWPP:[],
  IMG:[],
  Ticket:[],
  searchQuery: ''
};

let idCounter = 3;

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { category, name, text } = action.payload;
      if(!state[category]) state[category]=[];
      state[category].push({ id: Date.now(), name, text });
    },
    removeWidget: (state, action) => {
      const { category, id } = action.payload;
      state.categories[category] = state.categories[category].filter(widget => widget.id !== id);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { addWidget, removeWidget, setSearchQuery } = dashboardSlice.actions;
export default dashboardSlice.reducer;