import React, {useState} from "react";

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage ('혜원이 사랑해요!');
    const onClickLeave = () => setMessage (' 혜원이 조금만 기다려용 ');
    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>눌러봐용❤️</button>
            <button onClick={onClickLeave}>눌러요🥰</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={()=> setColor('red')}>빨간색</button>
            <button style={{color: 'green'}} onClick={()=> setColor('green')}>초록색</button>
            <button style={{color: 'blue'}} onClick={()=> setColor('blue')}>파란색</button>
        </div>
    );
};

export default Say;