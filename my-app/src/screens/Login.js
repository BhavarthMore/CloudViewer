import React, {useState,createContext,useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";




export default function Login({children}) {
    let navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        firstname: "",
        email: "",
        password: "",
        lastname: ""
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser", {
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
        
        if(!json.success){
            alert("Enter Valid Credentials");
        }
        if(json.success){
          localStorage.setItem("userEmail",credentials.email);
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("userEmail"))
          navigate("/uploadfile", { state: { userMail: credentials.email } });
      }

    };

    const onChange=(event) =>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }

    return (
        <div>
            <section className=" py-3 py-md-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className="card border border-light-subtle rounded-3 shadow-sm">
                                <div className="card-body p-3 p-md-4 p-xl-5">

                                    <h2 className="fs-6 fw-normal text-center  mb-4">Enter your details to LogIn</h2>
                                    <form action="#!" onSubmit={handleSubmit}>
                                        <div className="row gy-2 overflow-hidden">

                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" value={credentials.email} onChange={onChange}required />
                                                    <label htmlFor="email" className="form-label text-dark">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" name="password" id="password" value={credentials.password} placeholder="Password" onChange={onChange}  required />
                                                    <label htmlFor="password" className="form-label text-dark">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid my-3">
                                                    <button  className="btn btn-primary btn-lg text-black" style={{ "backgroundColor": "#e3f2fd" }} type="submit">Login</button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid my-3">
                                                    <Link to="/signup" className='btn  btn-lg text-black' style={{ "backgroundColor": "#e3f2fd" }}>I'm a new User</Link>
                                                </div>
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
