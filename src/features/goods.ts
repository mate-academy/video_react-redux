type AddAction = {
  type: "goods/ADD";
  payload: string;
};
type RemoveAction = {
  type: "goods/REMOVE";
  payload: string;
};
type ClearAction = {
  type: "goods/CLEAR";
};

type Action = AddAction | RemoveAction | ClearAction;

const add = (good: string): AddAction => ({
  type: "goods/ADD",
  payload: good,
});

const remove = (good: string): RemoveAction => ({
  type: "goods/REMOVE",
  payload: good,
});

const clear = (): ClearAction => ({
  type: "goods/CLEAR",
});

const initialState: string[] = [];

export const actions = { add, remove, clear };
const goodsReducer = (goods: string[] = initialState, action: Action) => {
  switch (action.type) {
    case "goods/ADD":
      return [...goods, action.payload];

    case "goods/REMOVE":
      return goods.filter((good) => good !== action.payload);

    case "goods/CLEAR":
      return [];
    default:
      return goods;
  }
};

export default goodsReducer;
