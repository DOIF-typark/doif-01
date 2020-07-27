import React, { useRef } from 'react';

function UserList({users}) {
    
  return (
  <ul>
      {users.map((user, index) => (
      <li key={user.id}>이름: {user.name} 이메일: {user.email}</li>
      ))}
  </ul>);
}

export default UserList;
