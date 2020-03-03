import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./LoginSignup.css";

const SignupForm = ({ touched, errors }) => {

    return (
        <div className="form-wrapper">
            <Form>
                <label htmlFor="username">
                    Username:
                    <Field id="username" name="username" type="text" placeholder="Username" />
                    {touched.username && errors.username && (
                        <p className="errors">{errors.username}</p>)}
                </label>
                <label htmlFor="email">
                    Email:
                    <Field id="email" name="email" type="email" placeholder="Email" />
                    {touched.email && errors.email && (
                        <p className="errors">{errors.email}</p>)}
                </label>
                <label htmlFor="password">
                    Password:
                    <Field id="password" name="password" type="password" placeholder="Password" />
                    {touched.password && errors.password && (
                        <p className="errors">{errors.password}</p>)}
                </label>
                <button type="submit">Sign Up</button>
            </Form>
        </div>
    )
}

const FormikSignupForm = withFormik({
    mapPropsToValues({ username, email, password }) {
        return {
            username: username || "",
            email: email || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        email: Yup.string().email(),
        password: Yup.string().required()
    }),
    handleSubmit(values, { resetForm }) {
        console.log(values);
        axios.post("https://reqres.in/api/users", values)
            .then(res => {
                console.log(res);
                resetForm();
            })
            .catch(err => console.log(err));
    }
})(SignupForm);

export default FormikSignupForm;