import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {providerLogin, createUser, updateUserProfile} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        handleUpdateProfile(name, photoURL)
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch( e => console.error(e));
    }

    const handleUpdateProfile = (name, photoURL) =>{
        const profile ={
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch((error) => console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-3xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">UserName</span>
                    </label>
                    <input name="name" type="text" placeholder="user name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photoURL" type="text" placeholder="photo url" className="input input-bordered" />
                    <label className="label">
                    </label>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                    </label>
                    </div>
                    <button className="btn btn-primary mt-6 form-control" type='submit' value="Login">Sign in</button>
                    
                    <p className='text-center'>Or</p>
                    <div>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning w-full">Google</button>
                        <button className="btn btn-outline btn-warning w-full">Github</button>
                    </div>

                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;