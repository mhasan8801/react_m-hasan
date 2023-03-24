import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"


const Login = () => {

    return (
        <>
            <Navbar />

            <div className="container my-5 pt-4">
                <h3 className="mt-5">Login</h3>
                <form className="row g-3">
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
                    <p>Belum punya akun? <Link to="/register">Register</Link></p>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>

            </div>

        </>

    )
}

export default Login;