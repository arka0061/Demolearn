import React from 'react';
const userInput=(Props)=>
{
    const inputstyle={
        border:'5px solid red'
        
    }

return <input type='text'
style={inputstyle}
onChange={Props.userinput} 
value={Props.cname}></input>
};
export default userInput;