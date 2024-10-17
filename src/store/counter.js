import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            //Here we can mutate state, because it overrides it and it's really not mutated state
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            //payload is the identifier of the extra data passed onto
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;