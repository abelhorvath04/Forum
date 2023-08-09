import React from 'react';
import '../../css/app.css'
import { Link } from 'react-router-dom';

function Signup() {

    return (
        <div className="container card_container fade-in">
            <div className="row justify-content-center">
                <div className="col-4 min_width_300">
                    <div className="card">
                        <div className="card-header">
                            <h2 className='text-center'>Sign Up</h2>
                        </div>
                        <div className="card-body text-center">
                        <div className="container">
                                <input type="text"
                                    name="Mail"
                                    id="Mail"
                                    placeholder='E-mail address'
                                    className='form-control rounded'
                                />
                                <br />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder='Password'
                                    className='form-control rounded'
                                />
                                <br />
                                <Link to="/login">
                                    <input
                                        type="button"
                                        value="Sign up"
                                        className="btn btn-primary btn-lg btn_login fw-bold"
                                    />
                                </Link>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <Link to="/login">
                                <input
                                    type="button"
                                    value="Back to Log in"
                                    className="btn btn-secondary btn-lg fw-bold"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
