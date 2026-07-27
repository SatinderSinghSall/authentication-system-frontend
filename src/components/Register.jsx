import React, { useState } from "react";
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
import { IoPersonAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const visibleHandler = () => {
    setVisible(!visible);
  };

  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .email("Invalid E-mail entered. Try again with valid e-mail.")
      .required("E-mail is required."),
    password: Yup.string().required("Password is required."),
  });

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="auth-card">
      <Formik
        onSubmit={submitHandler}
        initialValues={initialState}
        validationSchema={validationSchema}
      >
        {({ handleBlur, handleChange, values, touched, errors }) => (
          <Form>
            <div className="container-fluid">
              <div className="row g-3">
                <div className="col-12 auth-header">
                  <IoPersonAddSharp />
                  <p>Register a New Account.</p>
                  <span>Sign-up to Continue</span>
                </div>

                <div className="col-12">
                  <TextField
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    label="Enter your name"
                    fullWidth
                    size="small"
                  />
                </div>

                <div className="col-12">
                  <TextField
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    label="Enter your email"
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
                    Create a new account
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
                      navigate("/login");
                    }}
                  >
                    Login to your Account
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

export default Register;
