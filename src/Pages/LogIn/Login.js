import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { signIn, googleSignUp } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const [loginUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();


    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }


    const handleLogin = (data) => {

        signIn(data.email, data.password)
            .then(result => {
                toast.success('Login Successfully.')
                setCreatedUserEmail(result.user.email);
                console.log(result.user.email);

            }).catch(err => {
                console.error(err)
                toast.error('Login Unsuccess.')
            })
    }
    const handleGoogleLogin = () => {
        googleSignUp()
            .then((result) => {
                toast.success('Google Login Successfully.')
                saveUser(result.user.displayName, result.user.email)
                setCreatedUserEmail(result.user.email);
            }).catch((error) => {

                console.error(error);
                toast.error('Google Login Unsuccess.')
            })
    }

    const saveUser = (name, email) => {
        const role = 'buyer'
        const user = { name, email, role };
        fetch('https://server-side-assignment12.vercel.app/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }



    return (
        <div className='h-full flex justify-center items-center'>
            <div className='w-1/4 p-7 '>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit((handleLogin))}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", { required: "email is Required" })} placeholder="Type your Email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", { required: "password is Required" })} placeholder="Type your password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className='btn w-full mt-3' type="submit" />
                </form>
                <p>Don't have a Account ? Please <Link className='text-secondary' to="/register">Register</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;