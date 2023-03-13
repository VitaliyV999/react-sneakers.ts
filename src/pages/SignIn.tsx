import React from 'react';
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className='loginInput'>
            <input type="text" name='authInput' placeholder='login'/>
            <input type="text" name='authInput' placeholder='password'/>
            <Link to='shop'><button className='signInBtn'>sign in</button></Link>
        </div>
    );
};

export default SignIn;