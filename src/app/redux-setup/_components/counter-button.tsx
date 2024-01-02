"use client";
import { useCommonDispatch, useCommonSelector } from "@/lib/redux/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/lib/redux/slices/counter-slicce";

//!DELETE SOON
const CounterButton = () => {
  const dispatch = useCommonDispatch();
  const count = useCommonSelector((state) => state.counter.value);
  return (
    <div className="flex flex-row items-start gap-5">
      <div className="text-3xl grow">count: {count}</div>
      <button
        className="btn btn-primary btn-outline"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="btn btn-accent btn-outline"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button
        className="btn btn-error"
        onClick={() => dispatch(incrementByAmount(count))}
      >
        Inc by {count}
      </button>
    </div>
  );
};

export default CounterButton;
