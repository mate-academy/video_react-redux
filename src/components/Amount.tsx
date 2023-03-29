import { useDispatch } from "react-redux";
import { actions } from "../features/amount";
import { useAppSelector } from "../app/hooks";

export const Amount = () => {
    const dispatch = useDispatch();
    const amount = useAppSelector(state => state.amount) //take a state and can return part of state

  const add = (value: number) => dispatch(actions.add(value));
  const take = (value: number) => dispatch(actions.take(value));
  const clear = () => dispatch(actions.clear());

  return (
    <h2 className="amount">
      <span>Amount: {amount}</span>

      <button onClick={() => take(50)}>-50</button>
      <button onClick={() => take(10)}>-10</button>
      <button onClick={clear}>❌</button>
      <button onClick={() => add(10)}>+10</button>
      <button onClick={() => add(50)}>+50</button>
    </h2>
  );
};
