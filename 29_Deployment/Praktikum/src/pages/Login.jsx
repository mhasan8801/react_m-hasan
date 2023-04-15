import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"


const Login = () => {

    const [status, setStatus] = useState("");

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        email: "",
        password: ""
    })

    const formChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const validForm = () => {
        let validate = true;
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!regexEmail.test(form.email)) {
            validate = false;
            errors.email = "Email is invalid!"
        }
        if (form.password.length < 8) {
            validate = false;
            errors.password = "Password minimal 8 character!";
        }

        setError(errors);
        return validate;
    }

    const btnLogin = (event) => {
        event.preventDefault();

        if (validForm()) {
            console.log(form)
        }

        const dummyUser = {email: 'admin@gmail.com', password: 'password123'};
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === form.email && user.password === form.password) {
        localStorage.setItem('isLoggedIn', true);
        setStatus("success");
        } else if (form.email === dummyUser.email && form.password === dummyUser.password) {
        localStorage.setItem('user', JSON.stringify(dummyUser));
        localStorage.setItem('isLoggedIn', true);
        setStatus("success");
        } else {
            setStatus("error");
          }
    }

    return (
        <>
            <Navbar />

            <div className="container my-5 pt-4">
                <h3 className="mt-5">Login</h3>
                <form className="row g-3" onSubmit={btnLogin}>
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
                    <p>Belum punya akun? <Link to="/register">Register</Link></p>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>  
                        {status === "success" && (
                            <div className="alert alert-success" role="alert">
                            Login successful!
                            </div>
                        )}
                        {status === "error" && (
                            <div className="alert alert-danger" role="alert">
                            Invalid email or password!
                            </div>
                        )}
                    </div>
                </form>

            </div>

        </>

    )
}

export default Login;