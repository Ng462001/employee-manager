import { MDBInput } from 'mdb-react-ui-kit'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <>
                {/* Section: Design Block */}
                <section className="text-center text-lg-start">
                    {/* Jumbotron */}
                    <div className="container py-4">
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div
                                    className="card cascading-right bg-body-tertiary"
                                    style={{ backdropFilter: "blur(30px)" }}
                                >
                                    <div className="card-body p-5 shadow-5 text-center">
                                        <h2 className="fw-bold mb-5">Sign In </h2>
                                        <form>
                                            {/* 2 column grid layout with text inputs for the first and last names */}
                                            {/* Email input */}
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <MDBInput
                                                    label="Email address"
                                                    id="form3Example3"
                                                    type="email"
                                                    className="form-control"
                                                />
                                            </div>
                                            {/* Password input */}
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <MDBInput
                                                    label="Password"
                                                    id="form3Example3"
                                                    type="password"
                                                    className="form-control"
                                                />
                                            </div>
                                            {/* Submit button */}
                                            <button
                                                type="submit"
                                                data-mdb-button-init=""
                                                data-mdb-ripple-init=""
                                                className="btn btn-primary btn-block mb-4"
                                            >
                                                Sign In
                                            </button>
                                            {/* Register buttons */}
                                            <div className="text-center">
                                                <p>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img
                                    src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                                    className="w-100 rounded-4 shadow-4"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    {/* Jumbotron */}
                </section>
                {/* Section: Design Block */}
            </>
        </>

    )
}

export default Login