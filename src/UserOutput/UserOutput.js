import React from 'react';
import './UserOutput.css';
const userOutput=(Props)=>
{
    return (
        <div className='UserOutput'>
        <p>Username: {Props.usrname}</p>
        <p>Hellow!(2)</p>
    
         </div>
    );
};
export default userOutput;