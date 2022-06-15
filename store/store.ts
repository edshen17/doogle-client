import { configureStore } from "@reduxjs/toolkit"
import dogBreedsReducer from "./dog-breeds/dog-breeds-slice"
import dogBreedImagesReducer from "./dog-breed-images/dog-breed-images-slice"

export const store = configureStore({
  reducer: {
    dogBreeds: dogBreedsReducer,
    dogBreedImages: dogBreedImagesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch