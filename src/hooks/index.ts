import { TypedUseSelectorHook, useSelector } from "react-redux";

import { InitialStateTypes } from "../types";

export const useAppSelector: TypedUseSelectorHook<InitialStateTypes> =
  useSelector;
