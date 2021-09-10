import React from 'react';
import moment from 'moment'
import {useHistory} from "react-router-dom";

const UserReposListItem = ({repo}) => {
  const history = useHistory()

  return (
    <div className='d-flex'>
      <button
        onClick={() => history.push(`${repo.owner.login}/${repo.name}`)}
        className="d-flex align-items-center list-group-item list-group-item-action "
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-center flex-column m-2">
          <h4 className="d-flex mb-1">{repo.name}</h4>
          {repo.description ? <div className='fw-light'>description: {repo.description}</div> : null}
          <div className='fw-lighter fs-6'>created at: {moment(repo.created_at).format('DD MM YYYY')}</div>
          <div>language: {repo.language}</div>
        </div>
      </button>
    </div>
  );
};

export default UserReposListItem;