import { configureStore, } from '@reduxjs/toolkit'
import AuthReducer from "../Features/Auth/AuthSlice.ts"
import ComplaintsReducer from "../Features/ComplaintsApi/ComplaintsSlice.ts"


export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    complaints: ComplaintsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

