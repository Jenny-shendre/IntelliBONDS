import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Box sx={{ flexGrow: 1, padding: "80px 20px" }}>
        <IconButton onClick={() => setSidebarOpen(true)} sx={{ position: "absolute", top: 20, left: 20 }}>
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <h2>Welcome to the Dashboard</h2>
      </Box>
    </Box>
  );
};

export default Dashboard;
