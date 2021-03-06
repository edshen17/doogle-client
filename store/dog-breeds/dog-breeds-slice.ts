import { createStoreSlice, fetchData } from '../common'
import { RootState } from '../store'

const moduleData = { name: 'dogBreeds' }

export const fetchDogBreeds = fetchData(moduleData.name)

export const dogBreedsSlice = createStoreSlice({ ...moduleData, dataProcessor(state, action) {
  const breedNames = []
  for (const breedName in action.payload) {
    breedNames.push(`${breedName[0].toUpperCase()}${breedName.slice(1)}`)
  }
  state.data = breedNames
} });

export const getAllDogBreeds = (state: RootState) => state.dogBreeds.data
export const getDogBreedsStatus = (state: RootState) => state.dogBreeds.status
export const getDogBreedsError = (state: RootState) => state.dogBreeds.error

export const { reset } = dogBreedsSlice.actions;

export default dogBreedsSlice.reducer