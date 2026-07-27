import React from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { GrPowerReset } from "react-icons/gr";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { ArrowBack } from "@mui/icons-material";

function ForgotPassword() {
  const navigate = useNavigate();

  const initialState = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid E-mail entered. Try again with valid e-mail.")
      .required("E-mail is required."),
  });

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="auth-card">
      <Formik
        initialValues={initialState}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {({ handleBlur, handleChange, touched, values, errors }) => (
          <Form>
            <div className="container-fluid">
              <div className="row g-3">
                <div className="col-12 auth-header">
                  <GrPowerReset />
                  <p>Find Your Account.</p>
                  <span>Enter Your Registered E-Mail</span>
                </div>

                <div className="col-12">
                  <TextField
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    label="Registered Email"
                    fullWidth
                    size="small"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <AlternateEmailIcon color="action" />
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
                    endIcon={<SendIcon />}
                  >
                    Send OTP
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

export default ForgotPassword;
