import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {
    "CSPM Executive Dashboard": [
      { id: 1, name: "Widget A", text: "Random content A" },
      { id: 2, name: "Widget B", text: "Random content B" }
    ],
    "Analytics Dashboard": []
  },
  searchQuery: ''
};

let idCounter = 3;

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { category, name, text } = action.payload;
      state.categories[category].push({ id: idCounter++, name, text });
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