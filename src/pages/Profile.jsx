import { Edit, Logout } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
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
  const [editOpen, setEditOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const openEditDialog = () => {
    setForm({
      name: user.name,
      email: user.email,
    });

    setEditOpen(true);
  };

  const getProfile = useCallback(async () => {
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
  }, [navigate]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

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

  const handleUpdate = async () => {
    const result = await httpAction({
      url: apis().updateProfile,
      method: "PUT",
      body: form,
    });

    if (result?.status) {
      toast.success(result.message);

      setUser(result.user);

      setEditOpen(false);
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
            startIcon={<Edit />}
            onClick={openEditDialog}
            sx={{ mb: 2 }}
          >
            Edit Profile
          </Button>

          <Button
            fullWidth
            color="error"
            variant="outlined"
            startIcon={<Logout />}
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

          <Dialog
            open={editOpen}
            onClose={() => setEditOpen(false)}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>Edit Profile</DialogTitle>

            <DialogContent>
              <TextField
                fullWidth
                margin="dense"
                label="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

              <TextField
                fullWidth
                margin="dense"
                label="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={() => setEditOpen(false)}>Cancel</Button>

              <Button variant="contained" onClick={handleUpdate}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Profile;
