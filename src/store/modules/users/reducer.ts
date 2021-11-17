import {Reducer} from 'redux'
import {produce} from 'immer'
import { IUserState } from './userTypes'

const INITIAL_STATE: IUserState = {
    users: {
      id: 0,
      username: 'Jhon Doe'
    },
}

const Users: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_USER_TO_STORE': {
        const { user } = action.payload;
          draft.users.id = user.id
          draft.users.username = user.username
        }
        break;
      default: {
        return draft;
      }
    }
  })
}

export default Users
