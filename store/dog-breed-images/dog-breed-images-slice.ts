import { createStoreSlice, fetchData } from '../common'
import { RootState } from '../store'

const moduleData = { name: 'dogBreedImages' }

export const fetchDogBreedImages = fetchData(moduleData.name)

export const dogBreedImagesSlice = createStoreSlice({ ...moduleData, reducers: {} });

export const getAllDogBreedImages = (state: RootState) => state.dogBreedImages.data
export const getDogBreedImagesStatus = (state: RootState) => state.dogBreedImages.status
export const getDogBreedImagesError = (state: RootState) => state.dogBreedImages.error

export default dogBreedImagesSlice.reducer