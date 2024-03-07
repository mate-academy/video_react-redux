import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import { amountSlice } from '../features/amount-slice';

export const Amount = () => {
  const amount = useAppSelector(state => state.amount.value);
  const dispatch = useDispatch();

  const take = (value: number) => {
    dispatch(amountSlice.actions.take(value))
  };

  const add = (value: number) => {
    dispatch(amountSlice.actions.add(value))
  };

  const clear = () => {
    dispatch(amountSlice.actions.clear())
  };

  return (
    <h2 className="amount">
      <span>Amount: {amount} PLN</span>

      <button onClick={() => take(50)}>-50</button>
      <button onClick={() => take(10)}>-10</button>
      <button onClick={clear}>❌</button>
      <button onClick={() => add(10)}>+10</button>
      <button onClick={() => add(50)}>+50</button>
    </h2>
  );
};