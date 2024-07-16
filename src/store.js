// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import formReducer from './reducers/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['form/setFormData'],
        ignoredPaths: ['form.documentation'],
      },
    }),
});

export default store;
