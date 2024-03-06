const ADD = 'amount/ADD';
const TAKE = 'amount/TAKE';
const CLEAR = 'amount/CLEAR';

type AddAmountType = {
  type: typeof ADD,
  value: number
}

const add = (value: number): AddAmountType => ({
  type: ADD,
  value
});

type TakeAmountType = {
  type: typeof TAKE,
  value: number
}

const take = (value: number): TakeAmountType => ({
  type: TAKE,
  value
});

type ClearAmountType = {
  type: typeof CLEAR,
}

const clear = (): ClearAmountType => ({
  type: CLEAR
})

type Action = AddAmountType | TakeAmountType | ClearAmountType

function amountReducer(amount = 0, action: Action) {
    switch(action.type) {
        case ADD:
            return amount + action.value;
        case TAKE:
            return amount - action.value;
        case CLEAR:
            return 0;
        default:
            return amount;
    }
};

export const actions = {
  add,
  take,
  clear,
};

export default amountReducer;
