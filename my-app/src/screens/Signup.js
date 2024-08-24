import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";



export default function Signup() {

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        firstname: "",
        email: "",
        password: "",
        lastname: ""
    });

    const [inputFilled, setInputFilled] = useState({
        firstname: false,
        email: false,
        password: false,
        lastname: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: credentials.firstname,
                email: credentials.email,
                password: credentials.password,
                lastname: credentials.lastname
            })
        });

        const json = await response.json();
        console.log(json);

        if (!json.success) {
            if (json.errors === "User with this email already exists") {
                alert("Email already exists. Please use a different email or log in.");
                navigate("/login");
            } else {
                alert("Enter Valid Credentials");
            }
        }

        navigate("/login");
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });

        // Update the filled state
        setInputFilled({ ...inputFilled, [name]: value !== "" });
    }

    return (
        <div>
            <section className=" py-3 py-md-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className="card border border-light-subtle rounded-3 shadow-sm">
                                <div className="card-body p-3 p-md-4 p-xl-5">

                                    <h2 className="fs-6 fw-normal text-center  mb-4" style={{ color: "#e3f2fd" }}>Enter your details to register</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row gy-2 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control text-black"
                                                        name="firstname"
                                                        id="firstName"
                                                        placeholder="First Name"
                                                        value={credentials.firstname}
                                                        onChange={onChange}
                                                        required
                                                        style={{
                                                            backgroundColor: credentials.firstname ? '#e3f2fd' : 'gray-900'
                                                        }}
                                                    />
                                                    <label htmlFor="firstName" className="form-label text-dark">First Name</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control text-black"
                                                        name="lastname"
                                                        id="lastName"
                                                        placeholder="Last Name"
                                                        value={credentials.lastname}
                                                        onChange={onChange}
                                                        required
                                                        style={{
                                                            backgroundColor: inputFilled.lastname ? '#e3f2fd' : 'gray-900'
                                                            
                                                        }}
                                                    />
                                                    <label htmlFor="lastName" className="form-label text-dark">Last Name</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control text-black"
                                                        name="email"
                                                        id="email"
                                                        placeholder="name@example.com"
                                                        value={credentials.email}
                                                        onChange={onChange}
                                                        required
                                                        style={{
                                                            backgroundColor: inputFilled.email ? '#e3f2fd' : 'gray-900'
                                                        }}
                                                    />
                                                    <label htmlFor="email" className="form-label text-dark">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control text-black"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Password"
                                                        value={credentials.password}
                                                        onChange={onChange}
                                                        required
                                                        style={{
                                                            backgroundColor: inputFilled.password ? '#e3f2fd' : 'gray-900'
                                                        }}
                                                    />
                                                    <label htmlFor="password" className="form-label text-dark">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                                                    <label className="form-check-label" htmlFor="iAgree">
                                                        I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid my-3">
                                                    <button className="btn btn-primary btn-lg text-black" style={{ backgroundColor: "#e3f2fd" }} type="submit">Sign up</button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <p className="m-0 text-center">Already have an account? <Link className="link-primary text-decoration-none" to='/login'>Sign in</Link></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
