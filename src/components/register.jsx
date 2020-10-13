import React from 'react';
const Register=({handleRegister,handleChange,value})=>{         
        return (
            <div>
                 <input onChange={handleChange} type="text" className="form-control col-6 m-2" placeholder="Type a Message" value={value}/>  
                <button className="btn btn-primary" onClick={handleRegister}>Register</button>
            </div>  
        );
    
}
 
export default Register;