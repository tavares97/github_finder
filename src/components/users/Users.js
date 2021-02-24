import React, { useContext, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users, searchUsers } = githubContext;

  useEffect(() => {
    searchUsers('tony');
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.length > 0 ? (
          users.map((user) => <UserItem key={user.id} user={user} />)
        ) : (
          <h1 style={{ textAlign: 'center', gridColumn: '2' }}>
            NO USERS FOUND
          </h1>
        )}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
