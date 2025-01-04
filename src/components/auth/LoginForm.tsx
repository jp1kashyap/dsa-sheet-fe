import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from "../../api/api"
import toast from "react-hot-toast";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
interface LoginFormValues {
    email: string;
    password: string;
   }

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const formik = useFormik<LoginFormValues>({
        initialValues: {
            email: '',
            password: '',
           },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await api.post("auth/login", values)
                if (response.data) {
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("userName", response.data.name)
                    if (localStorage.getItem("token")) {
                        toast.success("User Logged in successfully.")
                        navigate('/');
                    }
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.data.details) {
                        error.response?.data.details.map((err: { [key: string]: string }) => (
                            toast.error(err.message)
                        ))
                    } else {
                        toast.error(error.response?.data.message)
                    }
                }
            }
        },
    });

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-4">
                        <h3 className="text-center mb-4">Login Form</h3>
                        <form onSubmit={formik.handleSubmit}>
                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={`form-control ${formik.touched.email && formik.errors.email
                                        ? 'is-invalid'
                                        : ''
                                        }`}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Enter your email"
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                )}
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className={`form-control ${formik.touched.password && formik.errors.password
                                        ? 'is-invalid'
                                        : ''
                                        }`}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Enter your password"
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className="invalid-feedback">{formik.errors.password}</div>
                                )}
                            </div>
                            {/* Submit Button */}
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                            <div className='account-link'>
                                Not have an account? <Link to={"/register"}>Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
