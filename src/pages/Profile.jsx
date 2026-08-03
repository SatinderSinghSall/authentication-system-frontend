import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ScreenLoader from "../components/ScreenLoader";
import apis from "../utils/api";
import httpAction from "../utils/httpAction";
import toast from "react-hot-toast";

const Profile = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const getProfile = async () => {
    try {
      const result = await httpAction({
        url: apis().profileUser,
      });

      if (result?.status) {
        setUser(result.user);
        toast.success(result.message);
      } else {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleLogout = async () => {
    setOpen(false);

    const result = await httpAction({
      url: apis().logoutUser,
      method: "POST",
    });

    if (result?.status) {
      toast.success(result.message);
      navigate("/login");
    }
  };

  return (
    <>
      <ScreenLoader open={loading} text="Loading your profile..." />

      <div className="auth-card">
        <div className="profile-container">
          <span className="name">
            <Avatar
              sx={{
                backgroundColor: "orangered",
                textTransform: "capitalize",
              }}
            >
              {user?.name?.charAt(0)}
            </Avatar>
          </span>

          <span className="full-name">{user?.name}</span>

          <span className="email">{user?.email}</span>
        </div>

        <div className="action">
          <Button
            fullWidth
            variant="contained"
            endIcon={<Logout />}
            onClick={openDialog}
          >
            Logout
          </Button>

          <Dialog open={open} onClose={closeDialog} fullWidth maxWidth="xs">
            <DialogTitle>Confirm Logout</DialogTitle>

            <DialogContent>
              <DialogContentText>
                Are you sure you want to logout?
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={closeDialog}>Cancel</Button>

              <Button color="error" variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Profile;
