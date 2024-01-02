import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useCommonDispatch: () => AppDispatch = useDispatch;
export const useCommonSelector: TypedUseSelectorHook<RootState> = useSelector;
