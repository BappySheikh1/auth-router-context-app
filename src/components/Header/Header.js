import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)

    const handleSignOut=()=>{
        logOut()
        .then(() =>{
           
        })
        .catch((error)=> 
          console.log(error)
          
          );

    }
    
    
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
             <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
             <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
             <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
             <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
             <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
             {
              user?.email && <span>Welcome, {user.email}</span>
             }
             {  
                user?.uid ?
                <button onClick={handleSignOut} className="btn btn-sm">Log Out</button>
                : <Link to='/login' className='btn btn-sm'>Log In</Link>
             }
           </div>
        </div>
    );
};

export default Header;