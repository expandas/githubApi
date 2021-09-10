import React, {useEffect, useState} from 'react';
import {getTenUsersThunk} from "../redux/AC/githubUsersAC";
import {useDispatch, useSelector} from "react-redux";
import UserListItem from "./UserListItem";
import Loader from "./Loader";

const UserList = () => {
  const {tenUsers} = useSelector(state => state.githubUsers)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(getTenUsersThunk())
    setTimeout(() => setIsLoading(false), 1500)

  }, [dispatch])

  return (
    <>
      {isLoading ? <Loader/> :
        <ul className="list-group">
          {tenUsers.map(user =>
            <li className='list-group-item' key={user.id}><UserListItem user={user}/></li>
          )}
        </ul>
      }
    </>

  );
};

export default UserList;