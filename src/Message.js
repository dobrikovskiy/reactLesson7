import React from 'react';
import './Message.css'; // Импортируем стили

const Message = (props) => {
    return ( <
        div className = "message" > { props.text } <
        /div>
    );
};

export default Message;