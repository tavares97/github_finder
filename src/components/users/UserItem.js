import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="avatar"
        className="round-img"
        style={{ width: '60px' }}
      />

      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark brn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

//SETS THE 'user' OBJECT AS REQUIRED
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
