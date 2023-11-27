import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
    value: string[]
}

const initialState: State = {
    value: ['Apple', 'Banana', 'Pear'],
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload);
        },
        take: (state, action: PayloadAction<string>) => {
            return {
                value: state.value.filter(good => good !== action.payload)
            }
        },
    }
})