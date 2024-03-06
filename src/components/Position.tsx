import { action } from '../features/position';
import { useAppSelector } from '../app/hooks';
import { useDispatch } from 'react-redux';

export const Position = () => {
  const {x, y} = useAppSelector(state => state.position);
  const dispatch = useDispatch();

  const moveLeft = () => dispatch(action.moveLeft());
  const moveRight = () => dispatch(action.moveRight());
  const moveUp = () => dispatch(action.moveUp());
  const moveDown = () => dispatch(action.moveDown());

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
