import React, { useState } from "react";
import { AppBar, Toolbar, Button, IconButton, Avatar, Menu, MenuItem, Dialog } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useNavigate } from "react-router-dom";
import { clearAuth } from "../utils/auth";
import { ChromePicker } from "react-color";  // <- color picker
import "./Header.css";
import logo from "../assets/newlogo1.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState("#1976d2"); // default AppBar color

  const navigate = useNavigate();

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleSignOut = () => {
    clearAuth();
    handleMenuClose();
    navigate("/login");
  };

  const handleColorChange = (color) => {
    setHeaderColor(color.hex);
  };

  const handleColorPickerOpen = () => {
    setColorPickerOpen(true);
  };

  const handleColorPickerClose = () => {
    setColorPickerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" className="header" style={{ backgroundColor: headerColor }}>
        <Toolbar className="header-toolbar">
          <a href="https://intellibonds.com" aria-label="Front">
            <img src={logo} alt="IntelliBonds.com" className="header-logo" />
          </a>
          <div className="header-buttons">
            <Button
              variant="contained"
              className="header-btn-setcolor"
              onClick={handleColorPickerOpen}
            >
              Set Color
            </Button>
            <Button variant="outlined" className="header-btn-theme">
              Light theme
            </Button>
            <IconButton className="header-icon">
              <HelpOutlineIcon />
            </IconButton>
            <IconButton onClick={handleMenuOpen} className="header-avatar-btn">
              <Avatar className="header-avatar">S</Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{ style: { width: 200 } }}
            >
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      {/* Color Picker Dialog */}
      <Dialog open={colorPickerOpen} onClose={handleColorPickerClose}>
        <div style={{ padding: "1rem" }}>
          <h3>Pick a Header Color</h3>
          <ChromePicker color={headerColor} onChangeComplete={handleColorChange} />
          <div style={{ marginTop: "1rem", textAlign: "right" }}>
            <Button onClick={handleColorPickerClose} variant="contained" color="primary">
              Done
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Header;
