import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
         navigate('/')
    }

    const handleSignUp = (data) => {
        console.log(data.role)

        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)

                const userUpdateInfo = {
                    displayName: data.name
                }
                updateUser(userUpdateInfo)
                    .then(result => {
                        toast.success('Register Successfully.')
                        saveUser(data.name, data.email, data.role)
                    }).catch(e => {
                        console.error(e)

                    }
                    )

            })
            .catch(err => {
                console.error(err)
                toast.error('Google Register Unsuccess')
            })
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                console.log(data, "user add database")
                setCreatedUserEmail(email);
            }).catch(e => console.error(e))
    }


    return (
        <div className='h-full flex justify-center items-center'>
            <div className='w-1/4 p-7 '>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit((handleSignUp))}
                >
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Role</span></label>
                        <select {...register("role", { required: "Role Required" })} className="select select-bordered w-full">
                            <option disabled selected>choice</option>
                            <option selected>buyer</option>
                            <option selected>seller</option>
                        </select>
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

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