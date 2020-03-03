import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./LoginSignup.css";

const SignupForm = ({ touched, errors }) => {
const LoginForm = ({ touched, errors }) => {

    return (
        <div className="form-wrapper">
@@ -20,13 +21,13 @@ const SignupForm = ({ touched, errors }) => {
                    {touched.password && errors.password && (
                        <p className="errors">{errors.password}</p>)}
                </label>
                <button type="submit">Sign Up</button>
                <button type="submit">Login</button>
            </Form>
        </div>
    )
}

const FormikSignupForm = withFormik({
const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
@@ -46,6 +47,6 @@ const FormikSignupForm = withFormik({
            })
            .catch(err => console.log(err));
    }
})(SignupForm);
})(LoginForm);

export default FormikSignupForm; 
export default FormikLoginForm; 