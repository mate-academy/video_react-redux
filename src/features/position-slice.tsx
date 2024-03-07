import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface State {
    x: number,
    y: number
}

const initialState: State = {
  x: 0,
  y: 0
}

export const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    moveLeft: (state, action: PayloadAction<number>) => {
      state.x -= action.payload || 1;
    },
    moveRight: (state, action: PayloadAction<number>) => {
      state.x += action.payload;
    },
    moveUp: (state, action: PayloadAction<number>) => {
        state.y -= action.payload;
      },
    moveDown: (state, action: PayloadAction<number>) => {
        state.y += action.payload;
      },
  },
})