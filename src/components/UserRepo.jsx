import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentRepoThunk} from "../redux/AC/githubUsersAC";
import Loader from "./Loader";

const UserRepo = () => {
  const location = useLocation()
  const [userName, repoName] = [location.pathname.split('/')[1], location.pathname.split('/')[2]]
  const dispatch = useDispatch()
  const {currentRepo} = useSelector(state => state.githubUsers)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(setCurrentRepoThunk({userName, repoName}))
  }, [dispatch, userName, repoName])

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [currentRepo])

  return (
    <>
      {isLoading ? <Loader/> :
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className='row'>
                <div className="col text-center m-3">
                  <img src={currentRepo?.owner?.avatar_url}
                       style={{width: '150px', borderRadius: '50%'}}
                       alt="Avatar"/>
                </div>
                <div className='d-flex flex-column m-2'>
                  <div className='row'>
                    <h5>Ник: {currentRepo?.owner?.login}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="card">
                <div className="card-header">
                  <h3>{currentRepo.name}</h3>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className='list-group-item'>
                      <div className="container">
                        <div className="row">
                          <div className="col-1">Тип</div>
                          <div className='col-8'>Имя</div>
                          <div className='col-2'>Размер</div>
                        </div>
                      </div>
                    </li>
                    {currentRepo?.repoFiles?.map(repoFile => {
                      return <li className="d-flex list-group-item justify-content-between" key={repoFile.name}
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-1 d-flex justify-content-center align-items-center">
                              {repoFile.type === 'dir' ?
                                <img style={{height: '15px'}}
                                     src={'https://w7.pngwing.com/pngs/439/995/png-transparent-computer-icons-directory-folders-miscellaneous-angle-rectangle.png'}
                                     alt="dir"/> :
                                <img style={{height: '15px'}}
                                     src={'https://e7.pngegg.com/pngimages/988/717/png-clipart-computer-icons-document-file-format-presentation-icon-angle-rectangle.png'}
                                     alt="file"/>
                              }
                            </div>
                            <div className="col-8">
                              {repoFile.name}
                            </div>
                            {repoFile.size ? <div className='col-3'>{repoFile.size + ' kB'}</div> : null}
                          </div>
                        </div>
                      </li>
                    })}
                  </ul>
                  <div className="card">
                    <div className="card-header">
                      {currentRepo?.readmeFile ? "README" : "README файла нет =("}
                    </div>
                    <div className="card-body">
                      <blockquote className="blockquote mb-0">
                        <p>{currentRepo?.readmeFile}</p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>

  )
    ;
};

export default UserRepo;