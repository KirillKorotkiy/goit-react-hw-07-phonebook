import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { contactsApi } from './contactsAPI';

export const store = configureStore({
  reducer: {
    Contacts: contactSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
