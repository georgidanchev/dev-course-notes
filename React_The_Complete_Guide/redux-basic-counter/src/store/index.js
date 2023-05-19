import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

const counterSlicer = createSlice({
  name: 'counter',
  initialState,
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
    }
  }
})

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === "decrease") {
//     return {
//       counter: state.counter - action.amount,
//       showCounter: state.showCounter
//     }
//   }

//   if(action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter
//     }
//   }

//   return state
// }

// counterSlicer.actions.toggleCounter()

const store = configureStore({
  reducer: counterSlicer.reducer
})

export const counterActions = counterSlicer.actions;

export default store
