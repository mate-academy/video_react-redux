type MoveLeft = { type: 'position/MOVE_LEFT' };
type MoveRight = { type: 'position/MOVE_RIGHT' };
type MoveUp = { type: 'position/MOVE_UP' };
type MoveDown = { type: 'position/MOVE_DOWN' };

const moveLeft = (): MoveLeft =>  ({ type: 'position/MOVE_LEFT' });
const moveRight = (): MoveRight =>  ({ type: 'position/MOVE_RIGHT' });
const moveUp = (): MoveUp =>  ({ type: 'position/MOVE_UP' });
const moveDown = (): MoveDown =>  ({ type: 'position/MOVE_DOWN' });

type Action = MoveLeft | MoveRight | MoveUp | MoveDown;

type Position = {
  x: number,
  y: number,
}

const startPosition = { x: 0, y: 0 };

const positionReducer = (
  position: Position = startPosition,
  action: Action
): Position => {
  switch (action.type) {
    case 'position/MOVE_LEFT':
      return { ...position, x: position.x - 1 };

    case 'position/MOVE_RIGHT':
      return { ...position, x: position.x + 1 };
    
    case 'position/MOVE_UP':
      return { ...position, y: position.y - 1 };

    case 'position/MOVE_DOWN':
      return { ...position, y: position.y + 1 };

    default:
      return position;
  }
};

export const actions = { moveLeft, moveRight, moveUp, moveDown };

export default positionReducer;
