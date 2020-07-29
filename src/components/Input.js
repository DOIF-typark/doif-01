import React, { useState, useRef } from 'react';

function Input({name, email, onInputChange, onAdd}) {
    // const {name, email} = inputs;
    return (
        <form onSubmit={onAdd}>
            <input value={name}  name="name"  onChange={onInputChange} placeholder="이름" />
            <input value={email} name="email" onChange={onInputChange} placeholder="이메일" />
            <button >저장</button>
        </form>
    );
}

export default Input;
