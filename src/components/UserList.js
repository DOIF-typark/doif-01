import React, { useRef, useEffect } from 'react';

const User = React.memo(({user, onToggle, onRemove}) => {
    console.log('User 리렌더링');
    useEffect(() => {
        console.log(`${user.name}이 마운트됨`);

        return () => {
            console.log(`${user.name}이 언마운트됨`);
        }
    }, [user])

    const style = {
        color: user.active ? 'green' : 'black',
        cursor: 'pointer'
    };
    return (
        <>
        <li style={style} onClick={() => onToggle(user.id)}>
            이름: {user.name} 이메일: {user.email}
        </li>
        <button onClick={() => onRemove(user.id)}>삭제</button>
        </>
    );
});

function UserList({users, onToggle, onRemove}) {
    
  return (
    <ul>
        {users.map((user) => (
        <User key={user.id} user={user} onToggle={onToggle} onRemove={onRemove}/>
        ))}
    </ul>
  );
}

export default React.memo(UserList);
