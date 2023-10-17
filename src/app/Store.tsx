import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "../Features/Auth/AuthSlice.ts"


export type RootState = ReturnType<typeof AuthReducer>
export const store = configureStore({
  reducer: {
    auth: AuthReducer
  }
})

export type AppDispatch = typeof store.dispatch
