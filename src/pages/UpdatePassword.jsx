import React, { useState } from "react";
import { Button, TextField, InputAdornment, IconButton } from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { GrUpdate } from "react-icons/gr";
import {
  AddCircle,
  ArrowBack,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function UpdatePassword() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const visibleHandler = () => {
    setVisible(!visible);
  };

  const initialState = {
    password: "",
  };

  const validationSchema = Yup.object({
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

    navigate("/login");
  };

  return (
    <div className="auth-card">
      <Formik
        onSubmit={submitHandler}
        initialValues={initialState}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, values, touched, errors }) => (
          <Form>
            <div className="container-fluid">
              <div className="row g-3">
                <div className="col-12 auth-header">
                  <GrUpdate />
                  <p>Update Your Password</p>
                  <span>Create your new password.</span>
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
                    label="Enter your new password"
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
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    disabled={!values.password}
                    startIcon={<AddCircle />}
                  >
                    Update Password
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
                    Back to Login
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UpdatePassword;
