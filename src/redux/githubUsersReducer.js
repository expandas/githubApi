import {SET_CURRENT_USER, GET_TEN_USERS, SET_USER_INFO, SET_CURRENT_REPO} from "./types/githubUsersTypes";

const githubUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TEN_USERS:
      return {
        ...state,
        githubUsers: {
          ...state.githubUsers,
          tenUsers: [...action.payload]
        }
      }

    case SET_USER_INFO:
      return {
        ...state,
        githubUsers: {
          ...state.githubUsers,
          tenUsers: state.githubUsers.tenUsers.map(el => {
            if (el.login === action.payload.login) {
              return {...el, ...action.payload}
            } else return el
          })
        }
      }

    case SET_CURRENT_USER:
      return {
        ...state,
        githubUsers: {
          ...state.githubUsers,
          currentUser: {...action.payload}
        }
      }

    case SET_CURRENT_REPO:
      return {
        ...state,
        githubUsers: {
          ...state.githubUsers,
          currentRepo: {...action.payload}
        }
      }

    default:
      return state
  }
}

export default githubUsersReducer