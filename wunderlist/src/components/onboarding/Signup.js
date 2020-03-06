import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import * as Yup from "yup";
import OtherUsers from "./OtherUsers";
import { useSpring, animated } from "react-spring";
import "./LoginSignup.css";

const schema = Yup.object().shape({
    username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .max(12, "Username must not exceed 12 characters")
        .required(),
    password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Password must be at least eight characters in length and include an upper case and lower case letter, a number, and a special character")
        .required()
});

const SignupForm = ({ history }) => {
    //console.log(props)
    // const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { register, handleSubmit, reset, errors } = useForm({ validationSchema: schema });

    const onSubmit = (data) => {
        axiosWithAuth()
            .post('/api/auth/users/register', data)
            .then(res => {
                console.log(res)
                // setCredentials({ username: '', password: '' });
                reset();
                history.push('/login')
            })
            .catch(err => console.log)
    }

    // const handleChange = e => {
    //     //console.log(e.target.name, e.target.value);
    //     setCredentials({
    //         ...credentials,
    //         [e.target.name]: e.target.value
    //     });
    // }

    const props = useSpring({
        transform: 'translateX(0vw)',
        from: { transform: 'translateX(100vw)' }
    });

    return (
        <>
            <animated.div className="other-users-wrapper" style={props}>
                <OtherUsers />
            </animated.div>
            <animated.div className="form-wrapper" style={props}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">
                        <span>Username</span>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Username"
                            // value={credentials.username}
                            // onChange={handleChange}
                            ref={register}
                        />
                        {errors.username && <p className="error">{errors.username.message}</p>}
                    </label>
                    <label htmlFor="password">
                        <span>Password</span>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            // value={credentials.password}
                            // onChange={handleChange}
                            ref={register}
                        />
                        {errors.password && <p className="error">{errors.password.message}</p>}
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </animated.div>
        </>
    )
}

export default SignupForm;