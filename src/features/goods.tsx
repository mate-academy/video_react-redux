const ADD = 'goods/ADD';
const TAKE = 'goods/TAKE';

type AddAction = {
  type: typeof ADD,
  value: string
}

const add = (value: string): AddAction => ({
  type: ADD,
  value
});

type TakeAction = {
  type: typeof TAKE,
  value: string
}

const take = (value: string): TakeAction => ({
  type: TAKE,
  value
});

type Action = AddAction | TakeAction

const INITIAL_STATE = ['Apple', 'Banana', 'Pear'];

const reducer = (goods = INITIAL_STATE, action: Action) => {
  switch(action.type){
    case ADD:
      return [...goods, action.value];
    case TAKE:
      return goods.filter(good => good !== action.value);
    default:
      return goods;
  }
};

export const actions = {
  add,
  take,
}

export default reducer;
