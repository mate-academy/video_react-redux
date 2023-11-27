import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
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
        moveLeft: (state, action: PayloadAction<number | undefined>) => {
            state.x -= action.payload ?? 1
        },
        moveRight: (state, action: PayloadAction<number | undefined>) => {
            state.x += action.payload ?? 1
        },
        moveUp: (state, action: PayloadAction<number | undefined>) => {
            state.y += action.payload ?? 1
        },
        moveDown: (state, action: PayloadAction<number | undefined>) => {
            state.y -= action.payload ?? 1
        },
    }
})