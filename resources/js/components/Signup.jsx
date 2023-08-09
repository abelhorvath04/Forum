import React, { useState } from 'react';
import '../../css/app.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('/csrf-token');
            const csrfToken = response.data.token;

            axios.post('/api/register', formData, {
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
            })
                .then(response => {
                    console.log(response.data.message);
                })
                .catch(error => {
                    console.error('Error submitting data:', error);
                });
        } catch (error) {
            console.error('Error fetching CSRF token:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

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
                                <form>
                                    <input type="text"
                                        name="name"
                                        id="name"
                                        placeholder='Name'
                                        className='form-control rounded'
                                        onChange={handleChange}
                                        value={formData.name}
                                    />
                                    <br /> <input type="text"
                                        name="mail"
                                        id="mail"
                                        placeholder='E-mail address'
                                        className='form-control rounded'
                                        onChange={handleChange}
                                        value={formData.mail}
                                    />
                                    <br />
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder='Password'
                                        className='form-control rounded'
                                        onChange={handleChange}
                                        value={formData.password}
                                    />
                                    <br />
                                    <input
                                        type="password"
                                        name="password_confirmation"
                                        id="password_confirmation"
                                        placeholder='Password Again'
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
                                </form>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <Link to="/login">
                                <input
                                    type="submit"
                                    value="Back to Log in"
                                    className="btn btn-secondary btn-lg fw-bold"
                                    onSubmit={handleSubmit}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Signup;
