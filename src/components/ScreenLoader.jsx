import React from "react";
import { Backdrop, CircularProgress, Typography, Paper } from "@mui/material";

const ScreenLoader = ({ open, text = "Please wait..." }) => {
  return (
    <Backdrop
      open={open}
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 999,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          minWidth: 320,
        }}
      >
        <CircularProgress />

        <Typography variant="h6" sx={{ mt: 2 }}>
          {text}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Please wait while we securely process your request.
        </Typography>
      </Paper>
    </Backdrop>
  );
};

export default ScreenLoader;
