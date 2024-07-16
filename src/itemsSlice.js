// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Define a thunk to fetch items asynchronously
// export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
//   // Replace with actual API call or data fetching logic
//   const response = await fetch('https://api.example.com/items');
//   const data = await response.json();
//   return data;
// });

// // Define the initial state
// const initialState = {
//   items: [],
//   status: 'idle',
//   error: null,
// };

// // Create a slice for items
// const itemsSlice = createSlice({
//   name: 'items',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchItems.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchItems.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchItems.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// // Export actions and reducer
// export default itemsSlice.reducer;
