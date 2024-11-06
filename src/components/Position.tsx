// import { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { useDispatch } from 'react-redux';
import { actions as positionActions } from '../features/position';

export const Position = () => {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  const { x, y } = useAppSelector(state => state.position);
  const dispatch = useDispatch();

  /* const moveLeft = () => setX(x => x - 1);
  const moveRight = () => setX(x => x + 1);
  const moveUp = () => setY(y => y - 1);
  const moveDown = () => setY(y => y + 1); */

  const moveLeft = () => dispatch(positionActions.moveLeft());
  const moveRight = () => dispatch(positionActions.moveRight());
  const moveUp = () => dispatch(positionActions.moveUp());
  const moveDown = () => dispatch(positionActions.moveDown());

  const transformValue = `translate(${x * 100}%, ${y * 100}%)`;

  return (
    <section className="position">
      <h2>Position:</h2>

      <div className="position__content">
        <div className="buttons">
          <button onClick={moveUp}>&uarr;</button>

          <div>
            <button onClick={moveLeft}>&larr;</button>
            <strong>{x}:{y}</strong>
            <button onClick={moveRight}>&rarr;</button>
          </div>

          <button onClick={moveDown}>&darr;</button>
        </div>

        <div className="field">
          <div className="track" style={{ transform: transformValue }}>
            {x + y}
          </div>
        </div>
      </div>
    </section>
  );
};
