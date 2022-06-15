import { configureStore } from "@reduxjs/toolkit"
import dogBreedsReducer from "./dog-breeds/dog-breeds-slice"

export const store = configureStore({
  reducer: {
    dogBreeds: dogBreedsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch