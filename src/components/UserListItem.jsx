import React, {useEffect} from 'react';
import {getUserInfoThunk} from "../redux/AC/githubUsersAC";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const UserListItem = ({user}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getUserInfoThunk(user.login))
  }, [dispatch, user.login])

  return (
    <div className='d-flex'>
      <button
        onClick={() => history.push('/' + user.login)}
        className="d-flex align-items-center list-group-item list-group-item-action"
        aria-current="true"
      >
        <img src={user.avatar_url} className="img-thumbnail" alt="..."
             style={{width: '150px', borderRadius: '75px'}}/>
        <div className="d-flex w-100 justify-content-center flex-column m-2">
          <div className="d-flex mb-1">Ник: {user.login}</div>
          {user.name ? <div className="d-flex mb-1">Имя: {user.name}</div> : null}
          {user.location ? <div className="d-flex mb-1">Локация: {user.location}</div> : null}
          {user.company ? <div className="d-flex mb-1">Организации: {user.company}</div> : null}
        </div>
      </button>
    </div>
  )
}

export default UserListItem;
