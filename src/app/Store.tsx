import { configureStore, } from '@reduxjs/toolkit'
import AuthReducer from "../Features/Auth/AuthSlice.ts"


export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    
    
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

