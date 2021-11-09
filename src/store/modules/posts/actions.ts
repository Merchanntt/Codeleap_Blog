import { IUserData } from "./userTypes";

export function addUserToStore(user: IUserData) {
  return {
    type: 'ADD_USER_TO_STORE',
    payload: {
      user
    }
  }
}
