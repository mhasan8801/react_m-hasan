import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"

const Register = () => {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPw: ""
    })

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPw: ""
    })

    const formChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const validForm = () => {
        let validate = true;
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (form.firstName.length < 3) {
            validate = false;
            errors.firstName = "First name minimal 3 character!";
        }
        if (form.lastName.length < 3) {
            validate = false;
            errors.lastName = "Last name minimal 3 character!";
        }
        if (!regexEmail.test(form.email)) {
            validate = false;
            errors.email = "Email is invalid!"
        }
        if (form.password.length < 8) {
            validate = false;
            errors.password = "Password minimal 8 character!";
        }
        if (form.password !== form.confirmPw) {
            validate = false;
            errors.confirmPw = "Password and confirm password do not match!"
        }

        setError(errors);
        return validate;
    }

    const btnRegister = (event) => {
        event.preventDefault();

        if (validForm()) {
            console.log(form)
        }
    }

    return (
        <>
            <Navbar />

            <div className="container my-5 pt-4">
                <h3 className="mt-5">Register</h3>
                <form className="row g-3" onSubmit={btnRegister}>
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="firstName form-label">
                            First Name
                        </label>
                        <input type="text" className="firstName form-control" id="firstName" name="firstName" value={form.firstName} onChange={formChange} required />
                        {error.firstName && <span style={{ color: "red" }}>{error.firstName}</span>}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="lastName form-label">
                            Last Name
                        </label>
                        <input type="text" className="lastName form-control" id="lastName" name="lastName" value={form.lastName} onChange={formChange} required />
                        {error.lastName && <span style={{ color: "red" }}>{error.lastName}</span>}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="username" className="username form-label">
                            Username
                        </label>
                        <input type="text" className="username form-control" id="username" name="username" value={form.username} onChange={formChange} required />
                        {error.username && <span style={{ color: "red" }}>{error.username}</span>}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="email form-label">
                            Email
                        </label>
                        <input type="text" className="email form-control" id="email" name="email" value={form.email} onChange={formChange} required />
                        {error.email && <span style={{ color: "red" }}>{error.email}</span>}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="password form-label">
                            Password
                        </label>
                        <input type="password" className="password form-control" id="password" name="password" value={form.password} onChange={formChange} required />
                        {error.password && <span style={{ color: "red" }}>{error.password}</span>}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="confirmPw" className="confirmPw form-label">
                            Confirm Password
                        </label>
                        <input type="password" className="confirmPw form-control" id="confirmPw" name="confirmPw" value={form.confirmPw} onChange={formChange} required />
                        {error.confirmPw && <span style={{ color: "red" }}>{error.confirmPw}</span>}
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