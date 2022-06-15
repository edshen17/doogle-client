import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'

const DOG_BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

export enum API_STATUS {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

interface DogBreedsState {
  dogBreeds: { [key: string]: string[] },
  status: API_STATUS,
  error: string | undefined
}

const initialState: DogBreedsState = {
  dogBreeds: {},
  status: API_STATUS.IDLE,
  error: undefined,
}

export const fetchDogBreeds = createAsyncThunk('dogBreeds/fetchDogBreeds', async () => {
  try {
    const response = await axios.get(DOG_BREEDS_URL)
    return response.data.message;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return err.message
    }
  }
})

export const dogBreedsSlice = createSlice({
  name: 'dogBreeds',
  initialState,
  reducers: {
    setBreeds: (state, action: PayloadAction<{ message: { [key: string]: string[] }, status: string }>) => {
      state.dogBreeds = action.payload.message
    }
  },
  extraReducers(builder) {
    builder
    .addCase(fetchDogBreeds.pending, (state) => {
        state.status = API_STATUS.LOADING
    })
    .addCase(fetchDogBreeds.fulfilled, (state, action) => {
        state.status = API_STATUS.SUCCEEDED
        state.dogBreeds = action.payload
    })
    .addCase(fetchDogBreeds.rejected, (state, action) => {
        state.status = API_STATUS.FAILED
        state.error = action.error.message
    })
  }
})

export const getAllDogBreeds = (state: RootState) => state.dogBreeds.dogBreeds
export const getDogBreedsStatus = (state: RootState) => state.dogBreeds.status
export const getDogBreedsError = (state: RootState) => state.dogBreeds.error

export default dogBreedsSlice.reducer