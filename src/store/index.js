import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'

const store = configureStore({
    reducer : { counter : counterReducer, auth : authReducer }
})
// we need to combine all reducers into one object and pass it on to configure store.


export default store;
