import React, { useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Divider,
  CircularProgress,
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
import toast from "react-hot-toast";

import apis from "../utils/api";
import httpAction from "../utils/httpAction";
import ScreenLoader from "../components/ScreenLoader";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
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
    password: Yup.string()
      .min(8, "Password must be at least 8 characters.")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter.")
      .matches(/[a-z]/, "Must contain at least one lowercase letter.")
      .matches(/[0-9]/, "Must contain at least one number.")
      .matches(/[!@#$%^&*]/, "Must contain at least one special character.")
      .required("Password is required."),
  });

  const submitHandler = async (values) => {
    setLoading(true);

    try {
      const data = {
        url: apis().registerUser,
        method: "POST",
        body: values,
      };

      const result = await httpAction(data);

      if (result?.status) {
        toast.success(result.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ScreenLoader open={loading} text="Creating your account..." />

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
                      disabled={loading}
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      label="Enter your name"
                      fullWidth
                      size="small"
                    />
                  </div>

                  <div className="col-12">
                    <TextField
                      disabled={loading}
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      label="Enter your email"
                      fullWidth
                      size="small"
                    />
                  </div>

                  <div className="cols-12">
                    <TextField
                      disabled={loading}
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
                                disabled={loading}
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
                    <Button
                      variant="contained"
                      fullWidth
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <CircularProgress
                            size={20}
                            color="inherit"
                            sx={{ mr: 1 }}
                          />
                          Creating Account...
                        </>
                      ) : (
                        "Create a new account"
                      )}
                    </Button>
                  </div>

                  <div className="cols-12">
                    <Divider>OR</Divider>
                  </div>

                  <div className="cols-12">
                    <Button
                      variant="outlined"
                      disabled={loading}
                      fullWidth
                      endIcon={<Google />}
                    >
                      Continue with Google
                    </Button>
                  </div>

                  <div className="cols-12">
                    <Button
                      variant="outlined"
                      fullWidth
                      disabled={loading}
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
    </>
  );
};

export default Register;
