import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { signIn, googleSignUp } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        console.log(data.email)

        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
                toast.success('Login Successfully.')
            }).catch(err => {
                console.error(err)
                toast.error('Login Unsuccess.')
            })
    }
    const handleGoogleLogin = () => {
        googleSignUp()
            .then((result) => {
                console.log(result.user)
                toast.success('Google Login Successfully.')
            }).catch((error) => {

                console.error(error);
                toast.error('Google Login Unsuccess.')
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