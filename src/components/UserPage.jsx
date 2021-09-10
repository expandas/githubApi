import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUserThunk} from "../redux/AC/githubUsersAC";
import UserReposList from "./UserReposList";
import Loader from "./Loader";

const UserPage = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const {currentUser} = useSelector(state => state.githubUsers)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(setCurrentUserThunk(location.pathname))
  }, [location.pathname, dispatch])

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [currentUser])

  return (
    <>
      {isLoading ? <Loader/> :
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className='row'>
                <div className="col text-center m-3">
                  <img src={currentUser.avatar_url}
                       style={{width: '150px', borderRadius: '50%'}}
                       alt="Avatar"/>
                </div>
                <div className='d-flex flex-column m-2'>
                  <div className='row'>
                    <h5>Ник: {currentUser.login}</h5>
                  </div>
                  {currentUser.name &&
                  <div className='row'>
                    <h6>Имя: {currentUser.name}</h6>
                  </div>
                  }
                  {currentUser.location &&
                  <div className='row'>
                    <h6>Локация: {currentUser.location}</h6>
                  </div>
                  }
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <h5>{currentUser.login}'s repos</h5>
              </div>
              <UserReposList repos={currentUser?.repos}/>
            </div>
          </div>
        </div>
      }
    </>

  );
};

export default UserPage;