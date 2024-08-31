import { useCounter } from "../hooks/useCounter";

export const CounterReducer = ({ initValue = 0 }) => {
  const { counter, dispatch } = useCounter({ initValue });
  return (
    <div>
      <button onClick={() => dispatch({ type: "increase" })}>increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>decrease</button>
      <button onClick={() => dispatch({})}>reset</button>
      <span>{counter}</span>
    </div>
  );
};
