type ActionLeft = { type: 'position/MOVE_LEFT' };

type ActionRight = { type: 'position/MOVE_RIGHT' };

type ActionUp = { type: 'position/MOVE_UP' };

type ActionDown = { type: 'position/MOVE_DOWN' };

const moveLeft = (): ActionLeft => ({ type: 'position/MOVE_LEFT' });
const moveRight = (): ActionRight => ({ type: 'position/MOVE_RIGHT' });
const moveUp = (): ActionUp => ({ type: 'position/MOVE_UP' });
const moveDown = (): ActionDown => ({ type: 'position/MOVE_DOWN' });

type Action = ActionLeft | ActionRight | ActionUp | ActionDown;

type Position = { x: number, y: number };
const startPosition: Position = { x: 0, y: 0 };

const positionReducer = (position: Position = startPosition, action: Action): Position => {
  switch (action.type) {
    case 'position/MOVE_LEFT':
      return {...position, x: position.x - 1};
    
    case 'position/MOVE_RIGHT':
      return {...position, x: position.x + 1};

    case 'position/MOVE_UP':
      return {...position, y: position.y - 1};

    case 'position/MOVE_DOWN':
      return {...position, y: position.y + 1};

    default:
      return position;
  }
};

export const actions = { moveLeft, moveRight, moveUp, moveDown };

export default positionReducer;
