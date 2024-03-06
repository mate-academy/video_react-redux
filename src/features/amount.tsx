const ADD = 'amount/ADD';
const TAKE = 'amount/TAKE';
const CLEAR = 'amount/CLEAR';

type AddAction = {
  type: typeof ADD,
  value: number
}

const add = (value: number): AddAction => ({
  type: ADD,
  value
});

type TakeAction = {
  type: typeof TAKE,
  value: number
}

const take = (value: number): TakeAction => ({
  type: TAKE,
  value
});

type ClearAction = {
  type: typeof CLEAR,
}

const clear = (): ClearAction => ({
  type: CLEAR
})

type Action = AddAction | TakeAction | ClearAction

function reducer(amount = 0, action: Action) {
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

export default reducer;
