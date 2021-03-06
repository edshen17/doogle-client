import { createSlice, createAsyncThunk, PayloadAction, ValidateSliceCaseReducers } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_API_URL = 'https://dog.ceo/api'

export enum API_STATUS {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export interface StoreState {
  data: any,
  status: API_STATUS,
  error: string | undefined
}

const initialState: StoreState = {
  data: [],
  status: API_STATUS.IDLE,
  error: undefined,
}

export const fetchData = (name: string) => {
  return createAsyncThunk(`${name}/fetchData`, async (endpoint: string) => {
    try {
      const response = await axios.get(`${BASE_API_URL}${endpoint}`)
      return response.data.message;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return err.message
      }
    }
  })
}

type ReducersTemplate = ValidateSliceCaseReducers<StoreState, {
  reset: (state: any) => void;
} & unknown>

export const createStoreSlice = (props: { name: string, reducersTemplate?: ReducersTemplate, dataProcessor?: (state: StoreState, action: PayloadAction<any>) => void }) => {
  const { name, dataProcessor, reducersTemplate } = props;
  return createSlice({
    name,
    initialState,
    reducers: {
      ...reducersTemplate,
      reset: (state: any) => {
        state.data = []
        state.status = API_STATUS.IDLE
        state.error = undefined
      },
    },
    extraReducers(builder) {
      builder
      .addCase(fetchData(name).pending, (state) => {
          state.status = API_STATUS.LOADING
      })
      .addCase(fetchData(name).fulfilled, (state, action) => {
          state.status = API_STATUS.SUCCEEDED
          if (!dataProcessor) {
            state.data = action.payload
          } else {
            dataProcessor(state, action);
          }
      })
      .addCase(fetchData(name).rejected, (state, action) => {
          state.status = API_STATUS.FAILED
          state.error = action.error.message
      })
    }
  })
}