import React from 'react';
import UserReposListItem from "./UserReposListItem";

const UserReposList = ({repos}) => {
  return (
    <div>
      {repos?.map(el =>
        <UserReposListItem key={el.id} repo={el}/>
      )}
    </div>
  );
};

export default UserReposList;