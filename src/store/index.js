import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialCounterState = {counter : 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers : {
        increment(state){
            state.counter+= 1
        },
        decrement(state){
            state.counter -= 1
        },
        increase(state, action){
            state.counter += action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
    }
})

const initialAuthState = { isAuthenticated : false }

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
    reducer : { counter : counterSlice.reducer, auth : authSlice.reducer }
})
// we need to combine all reducers into one object and pass it on to configure store.

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
