import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users, onDelete }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
          <div>
            <Link to={`/users/edit/${user.id}`}>Edit</Link>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
