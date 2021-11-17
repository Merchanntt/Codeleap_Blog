import { combineReducers } from 'redux'
import Users from './users/reducer'

const allReducers = combineReducers({
  Users,
})

export default allReducers
