
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);

    
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate("/login");
            swal({
                title: "Log In Successfully",
                button: "OK",
                icon: "success"
              });
            const profile ={ displayName: name, photoURL:photoURL};
            updateUserProfile(profile)
            .then(()=>{})
            .catch( e => console.error(e));
        })
        .catch( e => console.error(e));
    }

    return (
        <div>
            <div className="hero min-h-screen mb-16">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Join with us now!</h1>
                </div>
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
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;