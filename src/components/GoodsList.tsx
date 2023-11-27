import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import { actions } from '../features/goods';

export const GoodsList = () => {
  const [newGood, setNewGood] = useState('');

  const goods = useAppSelector(state => state.goods);
  const dispatch = useDispatch();

  const addGood = (goodToAdd: string) => {
    dispatch(actions.add(goodToAdd))
  }

  const removeGood = (goodToRemove: string) => {
    dispatch(actions.take(goodToRemove));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!newGood) {
      return;
    }

    addGood(newGood);
    setNewGood('');
  };

  return (
    <section className="goods">
      <h2>Goods:</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newGood}
          onChange={e => setNewGood(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {goods.map(good => (
          <li key={good}>
            <button
              onClick={() => removeGood(good)} 
              className="delete"
            />

            {good}
          </li>
        ))}
      </ul>
    </section>
  );
};
