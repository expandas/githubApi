import {
  USERS_ROUTE,
  CRNT_USER_ROUTE,
  CRNT_USER_REPO_ROUTE,
} from './helpers/httpConstants'

import UserList from './components/UserList'
import UserRepo from "./components/UserRepo";
import UserPage from "./components/UserPage";

export const authRoutes = [
  {path: USERS_ROUTE, Component: UserList},
  {path: CRNT_USER_ROUTE, Component: UserPage},
  {path: CRNT_USER_ROUTE + CRNT_USER_REPO_ROUTE, Component: UserRepo},
]