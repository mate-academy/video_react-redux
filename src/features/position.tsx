const MOVE_LEFT = 'position/MOVE_LEFT';
const MOVE_RIGHT = 'position/MOVE_RIGHT';
const MOVE_UP = 'position/MOVE_UP';
const MOVE_DOWN = 'position/MOVE_DOWN';

type MoveLeftAction = {
  type: typeof MOVE_LEFT,
  distance: number
}

const moveLeft = (distance: number): MoveLeftAction => ({
  type: MOVE_LEFT,
  distance
});

type MoveRightAction = {
  type: typeof MOVE_RIGHT,
  distance: number
}

const moveRight = (distance: number): MoveRightAction => ({
  type: MOVE_RIGHT,
  distance
});

type MoveUpAction = {
  type: typeof MOVE_UP,
  distance: number
}

const moveUp = (distance: number): MoveUpAction => ({
  type: MOVE_UP,
  distance
});

type MoveDownAction = {
  type: typeof MOVE_DOWN,
  distance: number
}

const moveDown = (distance: number): MoveDownAction => ({
  type: MOVE_DOWN,
  distance
});

type Action = MoveLeftAction
  | MoveRightAction
  | MoveUpAction
  | MoveDownAction

const INITIAL_STATE = { x: 0, y: 0 };

const positionReducer = (position = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case MOVE_LEFT:
      return {
        ...position,
        x: position.x - action.distance};
    case MOVE_RIGHT:
      return {
        ...position,
        x: position.x + action.distance};
    case MOVE_UP:
      return {
        ...position,
        y: position.y - action.distance};
    case MOVE_DOWN:
      return {
        ...position,
        y: position.y + action.distance};
    default:
      return position;
  }
};

export const action = {
  moveLeft,
  moveRight,
  moveUp,
  moveDown
}

export default positionReducer;