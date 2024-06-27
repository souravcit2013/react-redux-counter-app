import { DECREMENT, INCREMENT, RESET } from "./actionConstant";

export const incrementAction = () => ({ type: INCREMENT })
export const decrementAction = () => ({ type: DECREMENT })
export const resetAction = () => ({ type: RESET })