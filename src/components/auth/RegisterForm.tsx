import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../api/api";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
interface RegisterFormValues {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("First name is required"),
      phone: Yup.string()
        .min(10)
        .max(11, "Must be 10 to 11 digits")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await api.post("auth/register", values);
        if (response.data) {
          toast.success(response?.data.message);
          setLoading(false);
          navigate("/login");
        }
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          if (error.response?.data.details) {
            error.response?.data.details.map((err: { [key: string]: string }) =>
              toast.error(err.message)
            );
          } else {
            toast.error(error.response?.data.message);
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
            <h3 className="text-center mb-4">User Registration</h3>
            <form onSubmit={formik.handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`form-control ${
                    formik.touched.name && formik.errors.name
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your name"
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                )}
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className={`form-control ${
                    formik.touched.phone && formik.errors.phone
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your phone"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="invalid-feedback">{formik.errors.phone}</div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                      ? "is-invalid"
                      : ""
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
                  className={`form-control ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your password"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="invalid-feedback">
                    {formik.errors.password}
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className={`form-control ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Confirm your password"
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button
                  type={loading ? "button" : "submit"}
                  className="btn btn-primary"
                >
                  {loading ? "Signing Up..." : "Register"}
                </button>
              </div>
              <div className="account-link">
                Already have an account? <Link to={"/login"}>Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
