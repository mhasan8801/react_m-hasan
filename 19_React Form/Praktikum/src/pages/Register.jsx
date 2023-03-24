import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"
import { useDispatch, useSelector } from "react-redux";
import { isEmail } from "validator";

const Register = () => {

    const form = useRef();
    const checkBtn = useRef();

    const required = (value) => {
        if (!value) {
            return (
                <div className="alert alert-danger">
                    This field is required!
                </div>
            )
        }
    }

    const validName = (value) => {
        if (value.length <= 3) {
            return (
                <div className="alert alert-danger">
                    This field minimal 3 character!
                </div>
            )
        }
    }

    const validEmail = (value) => {
        if (!isEmail(value)) {
            return (
                <div className="alert alert-danger">
                    This is not a valid email!
                </div>
            )
        }
    }

    const validPassword = (value) => {
        if (value.length <= 8) {
            return (
                <div className="aler alert-danger">
                    This password minimal 8 character!
                </div>
            )
        }
    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();

    const valueFirstName = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName)
    }
    const valueLasttName = (e) => {
        const lastName = e.target.value;
        setLastName(lastName)
    }
    const valueEmail = (e) => {
        const email = e.target.value;
        setEmail(email)
    }
    const valuePassword = (e) => {
        const password = e.target.value;
        setPassword(password)
    }

    const btnRegister = (e) => {
        e.preventDefault();

        setSuccess(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(regi)
        }

    }

    return (
        <>
            <Navbar />

            <div className="container my-5 pt-4">
                <h3 className="mt-5">Register</h3>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="firstName form-label">
                            First Name
                        </label>
                        <input type="text" className="firstName form-control" id="firstName" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="lastName form-label">
                            Last Name
                        </label>
                        <input type="text" className="lastName form-control" id="lastName" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="userName" className="userName form-label">
                            Username
                        </label>
                        <input type="text" className="userName form-control" id="userName" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="email form-label">
                            Email
                        </label>
                        <input type="email" className="email form-control" id="email" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="password form-label">
                            Password
                        </label>
                        <input type="password" className="password form-control" id="password" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="confirmPassword" className="confirmPassword form-label">
                            Confirm Password
                        </label>
                        <input type="password" className="confirmPassword form-control" id="confirmPassword" />
                    </div>
                    <p>Sudah punya akun? <Link to="/login">Login</Link></p>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>

            </div>

        </>

    )
}

export default Register;