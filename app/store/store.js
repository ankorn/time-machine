import { createStore, combineReducers } from 'redux'


const store = createStore(
  combineReducers({
    labels: (state = []) => state,
  }),
  {},
)

export default store
