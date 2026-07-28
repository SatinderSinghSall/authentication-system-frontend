import React, { useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
  ArrowBack,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const visibleHandler = () => {
    setVisible(!visible);
  };

  const initialState = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid E-mail entered. Try again with valid e-mail.")
      .required("E-mail is required."),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters.")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter.")
      .matches(/[a-z]/, "Must contain at least one lowercase letter.")
      .matches(/[0-9]/, "Must contain at least one number.")
      .matches(/[!@#$%^&*]/, "Must contain at least one special character.")
      .required("Password is required."),
  });

  const submitHandler = (values) => {
    console.log(values);
    navigate("/user/profile");
  };

  return (
    <div className="auth-card">
      <Formik
        onSubmit={submitHandler}
        validationSchema={validationSchema}
        initialValues={initialState}
      >
        {({ handleBlur, handleChange, values, touched, errors }) => (
          <Form>
            <div className="container-fluid">
              <div className="row g-3">
                <div className="col-12 auth-header">
                  <IoIosLogIn />
                  <p>Welcome Back!</p>
                  <span>Login to Continue</span>
                </div>

                <div className="col-12">
                  <TextField
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    label="Enter your e-mail"
                    fullWidth
                    size="small"
                  />
                </div>

                <div className="cols-12">
                  <TextField
                    name="password"
                    value={values.password}
                    type={visible ? "text" : "password"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    label="Enter your password"
                    fullWidth
                    size="small"
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={visibleHandler}
                              onMouseDown={(e) => e.preventDefault()}
                            >
                              {visible ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                </div>

                <div className="cols-12">
                  <Button variant="contained" fullWidth type="submit">
                    Login
                  </Button>
                </div>

                <div className="cols-12">
                  <Divider>OR</Divider>
                </div>

                <div className="cols-12">
                  <Button variant="outlined" fullWidth endIcon={<Google />}>
                    Continue with Google
                  </Button>
                </div>

                <div className="cols-12">
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<ArrowBack />}
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Create new Account
                  </Button>
                </div>

                <div>
                  <Button
                    variant="text"
                    color="error"
                    fullWidth
                    onClick={() => navigate("/password/forgot")}
                  >
                    Forgot Password?
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
