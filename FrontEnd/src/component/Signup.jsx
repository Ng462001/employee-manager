import { MDBInput } from 'mdb-react-ui-kit'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
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
                                        <h2 className="fw-bold mb-5">Sign Up </h2>
                                        <form>
                                            {/* 2 column grid layout with text inputs for the first and last names */}
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init="" className="form-outline">
                                                        <MDBInput
                                                            label="First name"
                                                            type="text"
                                                            id="form3Example1"
                                                            className="form-control "
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init="" className="form-outline">
                                                        <MDBInput
                                                            label="Last name"
                                                            type="text"
                                                            id="form3Example2"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Email input */}
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <MDBInput
                                                    label="Email address"
                                                    type="email"
                                                    id="form3Example3"
                                                    className="form-control"
                                                />

                                            </div>
                                            {/* Password input */}
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <MDBInput
                                                    label="Password"
                                                    type="password"
                                                    id="form3Example4"
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
                                                Sign up
                                            </button>
                                            {/* Register buttons */}
                                            <div className="text-center">
                                                <p>Already a member? <NavLink to="/login">Sign In</NavLink></p>
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

export default Signup