// todo constants
export const START_TIMER = "Start Timer";
export const PAUSE_TIMER = "Pause Timer";
export const RESET_TIMER = "Reset Timer";
export const INCREMENT_TIMER = "Increment Timer";

// action creators
export const startTimer = (index) => ({index, type: START_TIMER });
export const pauseTimer = (index) => ({index, type: PAUSE_TIMER });
export const resetTimer = (index) => ({index, type: RESET_TIMER });
export const incrementTimer = (index) => ({index, type: INCREMENT_TIMER });
