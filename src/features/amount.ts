type AddAmountAction = {
  type: 'amount/ADD';
  payload: number;
};

type TakeAmountAction = {
  type: 'amount/TAKE';
  payload: number;
};

type ClearAmountAction = {
  type: 'amount/CLEAR';
};

const add = (value: number): AddAmountAction =>  ({
  type: 'amount/ADD',
  payload: value,
});

const take = (value: number): TakeAmountAction =>  ({
  type: 'amount/TAKE',
  payload: value,
});

const clear = (): ClearAmountAction =>  ({
  type: 'amount/CLEAR',
});

type Action = AddAmountAction | TakeAmountAction | ClearAmountAction;

const amountReducer = (amount = 0, action: Action) => {
  switch (action.type) {
    case 'amount/ADD':
      return amount + action.payload;
    case 'amount/TAKE':
      if (action.payload > amount) {
        return amount;
      }
      
      return amount - action.payload;
    
    case 'amount/CLEAR':
      return 0;

    default:
      return amount;
  }
};

export const actions = { add, take, clear };

export default amountReducer;
