import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialCounterState = { counter: 0, showCounter: true, isAuthenticated: false }

const counterSlicer = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})

const initialAuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logOut(state) {
      state.isAuthenticated = false
    },
  },
})

const store = configureStore({
  reducer: {
    counter: counterSlicer.reducer,
    auth: authSlice.reducer,
  },
})

export const counterActions = counterSlicer.actions
export const authActions = authSlice.actions

export default store
