// reducers/formSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to load form data from localStorage
export const loadFormData = createAsyncThunk('form/loadFormData', async () => {
  const data = JSON.parse(localStorage.getItem('formData')) || {};
  return data;
});

// Initial state for the form data
const initialState = {
  id: '',
  jobTitle: '',
  projectOverview: '',
  branding: '',
  features: '',
  userInteraction: '',
  platform: '',
  seo: '',
  timeline: '',
  maintenance: '',
  documentation: null,
  scalability: '',
};

// Redux slice for form data management
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFormData: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loadFormData.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

// Export actions and reducer from slice
export const { setFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
