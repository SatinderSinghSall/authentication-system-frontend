import React from "react";
import { TextField, Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MdOutlineVerified } from "react-icons/md";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

function OTPVerify() {
  const navigate = useNavigate();

  const initialState = {
    otp_1: "",
    otp_2: "",
    otp_3: "",
    otp_4: "",
    otp_5: "",
    otp_6: "",
  };

  const validationSchema = Yup.object({
    otp_1: Yup.number().required(""),
    otp_2: Yup.number().required(""),
    otp_3: Yup.number().required(""),
    otp_4: Yup.number().required(""),
    otp_5: Yup.number().required(""),
    otp_6: Yup.number().required(""),
  });

  const submitHandler = (values) => {
    console.log(values);
  };

  const otpArray = ["otp_1", "otp_2", "otp_3", "otp_4", "otp_5", "otp_6"];

  const inputChange = (value, setFieldValue, index, item) => {
    setFieldValue(item, value);

    if (value && index < 6) {
      const element = document.getElementById(`${index + 1}`);

      if (element) {
        element.focus();
      }
    }
  };

  return (
    <div className="auth-card">
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {({
          handleBlur,
          handleChange,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <Form>
            <div className="container-fluid">
              <div className="row g-3">
                <div className="col-12 auth-header">
                  <MdOutlineVerified />
                  <p>Verify OTP</p>
                  <span>
                    Enter the 6 digit OTP we have send to your registered email
                    account.
                  </span>
                </div>

                <div className="col-12 otp-inputs">
                  {otpArray.map((item, index) => (
                    <TextField
                      key={item}
                      name={item}
                      value={values[item]}
                      onChange={(event) => {
                        const value = event.target.value
                          .replace(/[^0-9]/g, "")
                          .slice(0, 1);

                        inputChange(value, setFieldValue, index + 1, item);
                      }}
                      onBlur={handleBlur}
                      error={touched[item] && Boolean(errors[item])}
                      size="small"
                      fullWidth
                      type="text"
                      slotProps={{
                        htmlInput: {
                          id: `${index + 1}`,
                          maxLength: 1,
                          inputMode: "numeric",
                          pattern: "[0-9]*",
                        },
                      }}
                    />
                  ))}
                </div>

                <div className="col-12">
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    disabled={Object.values(values).some(
                      (value) => value === "",
                    )}
                  >
                    Verify OTP
                  </Button>
                </div>

                <div className="col-12">
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<ArrowBack />}
                    onClick={() => navigate("/login")}
                  >
                    Back to Login
                  </Button>
                </div>

                <Countdown
                  renderer={({ minutes, seconds, completed }) => {
                    if (completed) {
                      return (
                        <div className="otp-resend">
                          <span>Didn't receive the code?</span>

                          <Button
                            variant="text"
                            size="small"
                            startIcon={<RefreshRoundedIcon fontSize="small" />}
                            sx={{
                              textTransform: "none",
                              fontWeight: 600,
                              fontSize: "0.95rem",
                              px: 1,
                              minWidth: "auto",
                              borderRadius: 2,
                              "&:hover": {
                                backgroundColor: "rgba(25, 118, 210, 0.08)",
                              },
                            }}
                            onClick={() => {
                              // Resend OTP API
                            }}
                          >
                            Resend OTP
                          </Button>
                        </div>
                      );
                    }

                    return (
                      <div className="otp-timer">
                        <span>
                          Resend OTP in {""}
                          <strong>
                            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                          </strong>
                        </span>
                      </div>
                    );
                  }}
                  date={new Date().getTime() + 2 * 60 * 1000}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default OTPVerify;
