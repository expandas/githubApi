import axios from "axios";
import {GET_TEN_USERS, SET_CURRENT_REPO, SET_CURRENT_USER, SET_USER_INFO} from "../types/githubUsersTypes";

const baseUrl = "https://api.github.com/users"
const baseUrlRepo = "https://api.github.com/repos"

const authInterceptor = config => {
  config.headers.Authorization = `token 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` //это должен быть .env =)
  return config
}

axios.interceptors.request.use(authInterceptor)

export const getTenUsers = (users) => {
  return {
    type: GET_TEN_USERS,
    payload: users
  }
}

export const getTenUsersThunk = () => (dispatch) => {
  axios.get(`${baseUrl}?since=${Math.floor(Math.random() * (10000 - 1) + 1)}&per_page=10`
  )
    .then(res => dispatch(getTenUsers(res.data)))
}

const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo
  }
}

export const getUserInfoThunk = (login) => (dispatch) => {
  axios.get(baseUrl + '/' + login)
    .then(res => dispatch(setUserInfo({
      login: login,
      name: res.data.name,
      location: res.data.location,
      company: res.data.company
    })))
}

const setCurrentUser = (currentUser) => {
  return {
    type: SET_CURRENT_USER,
    payload: currentUser
  }
}

export const setCurrentUserThunk = (userName) => (dispatch) => {
  let currentUser
  axios.get(baseUrl + userName)
    .then(res => currentUser = res.data)
    .then(data => axios.get(baseUrl + userName + '/repos')
      .then(res => currentUser = {...currentUser, repos: [...res.data]}))
    .then(res => dispatch(setCurrentUser(currentUser)))
}

const setCurrentRepo = (currentRepo) => {
  return {
    type: SET_CURRENT_REPO,
    payload: currentRepo
  }
}

export const setCurrentRepoThunk = (currentRepo) => (dispatch) => {
  let currentRepoInfo
  axios.get(baseUrlRepo + '/' + currentRepo.userName + '/' + currentRepo.repoName)
    .then(repo => currentRepoInfo = {...repo.data})
    .then(res => axios.get(`${baseUrlRepo}/${currentRepo.userName}/${currentRepo.repoName}/contents/`)
      .then(contents => currentRepoInfo = {...currentRepoInfo, repoFiles: contents.data}))
    .then(res => axios.get(`${baseUrlRepo}/${currentRepo.userName}/${currentRepo.repoName}/readme`)
      .then(readme => currentRepoInfo = {...currentRepoInfo, readmeFile: atob(readme.data.content)})
      .catch(e => console.log(e.message)))
    .then(res => dispatch(setCurrentRepo(currentRepoInfo)))
}

