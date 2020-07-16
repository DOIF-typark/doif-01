import React, { useState } from 'react';

function Hello({isValid}) {
    const [text, setText] = useState('1');

    console.log(isValid);
    const onClickButton = () => {
        setText('123')
    };

    const style = {
        color:'red'
    };
  return (
    <>
        {isValid && <div>안녕</div>}
        {/* {isValid ? <div>안녕</div> : null} */}
        <span style={style}>{text}</span>
        <button onClick={onClickButton}>버튼</button>
    </>
  );
}

export default Hello;
