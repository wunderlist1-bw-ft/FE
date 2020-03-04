import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import * as Yup from "yup";
import "./LoginSignup.css";

const schema = Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().email(),
    password: Yup.string().required()
});

const SignupForm = props => {
    //console.log(props)
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { register, handleSubmit, errors } = useForm({ validationSchema: schema});

    const onSubmit = () => {
        //console.log(credentials)
        axiosWithAuth()
            .post('/api/auth/users/register', credentials)
            .then(res => {
                console.log(res)
                setCredentials({ username: '', password: '' });
                props.history.push('/login')
            })
            .catch(err => console.log)
    }

    const handleChange = e => {
        //console.log(e.target.name, e.target.value);
        setCredentials({ 
            ...credentials, 
            [e.target.name]: e.target.value 
        });
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">
                    Username:
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={handleChange}
                        ref={register}
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        ref={register}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;