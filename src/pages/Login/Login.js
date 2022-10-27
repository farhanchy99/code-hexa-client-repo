import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {logIn, providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname|| "/";

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleGitHubSignIn = () =>{
        providerLogin(gitHubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error))
    }

    

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <Link to={'/register'}>Don't have acoount? Register Now</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    <p>or</p>
                    <div>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning w-full">Google</button>
                        <button onClick={handleGitHubSignIn} className="btn btn-outline btn-warning w-full">Github</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;