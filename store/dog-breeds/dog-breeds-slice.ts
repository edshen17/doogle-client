import { createStoreSlice, fetchData } from '../common'
import { RootState } from '../store'

const moduleData = { name: 'dogBreeds', endpoint: '/breeds/list/all' }

export const fetchDogBreeds = fetchData(moduleData);

export const dogBreedsSlice = createStoreSlice({ ...moduleData, reducers: {}, dataProcessor(state, action) {
  const breedNames = []
  for (const breedName in action.payload) {
    breedNames.push(`${breedName[0].toUpperCase()}${breedName.slice(1)}`);
  }
  state.data = breedNames;
} });

export const getAllDogBreeds = (state: RootState) => state.dogBreeds.data
export const getDogBreedsStatus = (state: RootState) => state.dogBreeds.status
export const getDogBreedsError = (state: RootState) => state.dogBreeds.error

export default dogBreedsSlice.reducer