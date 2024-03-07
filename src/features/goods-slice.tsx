import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface State {
  value: String[]
}

const initialState: State = {
  value: ['Apple', 'Banana', 'Pear'],
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<String>) => {
      state.value.push(action.payload);
    },
    take: (state, action: PayloadAction<String>) => {
        return {
            value: state.value.filter(good => good !== action.payload)

        }
    },
  },
})