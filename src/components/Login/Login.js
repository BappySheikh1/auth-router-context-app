import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Login = () => {
 const {logInUser,forgetPassword}=useContext(AuthContext)
 const navigate=useNavigate()
 

    const handleSubmit=(event)=>{
      event.preventDefault();
      const form=event.target
      const email=form.email.value
      const password =form.password.value
      // console.log(email,password);
      logInUser(email,password)
      .then(result=>{
        const user=result.user
        form.reset()
        // console.log(user);
        navigate('/')
      })
      .catch(error =>{
        console.error(error);
      })

    }
    const handleForgetPassword=(email)=>{
      forgetPassword(email)
      
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col ">
                   <div className="text-center lg:text-left">
                     <h1 className="text-5xl font-bold">Please Login now!</h1>
                     <p className="py-6">Provident cupiditate voluptatem et in.</p>
                   </div>
                   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                     <form onSubmit={handleSubmit} className="card-body">

                       <div className="form-control">
                         <label className="label">
                           <span className="label-text">Email</span>
                         </label>
                         <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
                       </div>
                       <div className="form-control">
                         <label className="label">
                           <span className="label-text">Password</span>
                         </label>
                         <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                         <label className="label">
                           <Link onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</Link>
                         </label>
                       </div>
                       <div className="form-control mt-6">
                         <button className="btn btn-primary">Login</button>
                       </div>
                     </form>
                   </div>

                  </div>
            </div>
        </div>
    );
};

export default Login;