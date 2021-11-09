import {Reducer} from 'redux'
import { IUserData, IUserState } from './userTypes'

const INITIAL_STATE: IUserState = {
  users: [],
}

const Users: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  return state
}

export default Users
