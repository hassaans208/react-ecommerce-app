// Dependencies
import React from 'react';
//Internals
import './index.css';


const Button = ({children, action}) => (
        <button onClick={()=>action()} id="add-icon">{children}</button>
);

export default Button;
