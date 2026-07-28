import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setOpen(false);
    navigate("/login");
  };

  return (
    <div>
      <div className="auth-card">
        <div className="profile-container">
          <span className="name">
            <Avatar
              sx={{ backgroundColor: "orangered", textTransform: "capitalize" }}
            >
              S
            </Avatar>
          </span>
          <span className="full-name">Satinder Singh Sall</span>
          <span className="email">satindersinghsall111@gmail.com</span>
        </div>

        <div className="action">
          <Button
            endIcon={<Logout />}
            variant="contained"
            fullWidth
            onClick={handleOpen}
          >
            Logout
          </Button>

          <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
            <DialogTitle>Confirm Logout</DialogTitle>

            <DialogContent>
              <DialogContentText>
                Are you sure you want to logout from your account?
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>

              <Button variant="contained" color="error" onClick={handleLogout}>
                Logout
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Profile;
