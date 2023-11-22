import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../layouts/firebase.config.js';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setRegError('')
        setSuccess('')
        if (password.length < 6) {
            setRegError('Password Must be Minimum 6 Character');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegError("Your Password Should contain one UPPERCASE character")
            return;
        }
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("User Created Successfully!")
            })
            .catch(error => {
                console.log(error);
                const errorMessage = error.message;
                console.log(errorMessage);
                setRegError(errorMessage);
            })
        // console.log(email, password);      
    }

    return (
        <div className='flex flex-col  items-center justify-center'>

            <form onSubmit={handleSubmit} className='flex flex-col gap-2 '>
                <input required className='border-2 border-black rounded-md px-2' type="email" name='email' placeholder='Email' />

                <div className='relative w-fit' >
                    <input

                        required className=' border-2 border-black rounded-md px-2'
                        type={!showPassword ? "text" : "password"}
                        placeholder='Password'
                        name='password' />
                        <span className='absolute right-2 bottom-1.5' onClick={() => setShowPassword(!showPassword)}>
                        {
                            !showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                        }
                    </span>
                </div>

                <input className='btn btn-success' type="submit" value='Register' />
            </form>
            {
                regError && <p className='text-red-700'>{regError}</p>
            }
            {
                success && <p className='text-green-500'>{success}</p>
            }
        </div>
    );
};

export default Register;   