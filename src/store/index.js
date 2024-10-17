import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// const counterReducer = (state = initialCounterState, action) => {
//     if (action.type === 'increment') {
//         return {
//             //It overrides the old state thats why every value must be present, you should never mutate state with redux only override
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     };

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     };

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     };

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }

// const oldStoreMethod = createStore(counterReducer);

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
});

export default store;