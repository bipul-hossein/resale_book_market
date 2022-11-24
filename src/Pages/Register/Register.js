import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = (data) => {
        console.log(data.email)

        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)

                const userUpdateInfo = {
                    displayName: data.name
                }
                updateUser(userUpdateInfo)
                    .then(result => {
                        console.log(result.user)
                        toast.success('Register Successfully.')
                    }).catch(e => {
                        console.error(e)
                    }
                    )

            })
            .catch(err =>{console.error(err)
                toast.error('Google Register Unsuccess')} )
    }


    return (
        <div className='h-full flex justify-center items-center'>
            <div className='w-1/4 p-7 '>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit((handleSignUp))}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", { required: "Name is Required" })} placeholder="Type your Name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
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
                <p>Already have an Account!! Please <Link className='text-secondary' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;