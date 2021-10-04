import { createSlice, configureStore} from "@reduxjs/toolkit";

const initialstate = {counter: 0,  showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialstate,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },

        toogleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const store = configureStore({
    reducer: {counter:counterSlice.reducer}
});

export const counterAction = counterSlice.actions;


export default store;