import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Divider, Typography, IconButton, Tooltip } from "@mui/material";
import { Menu, ArrowBackIos, PersonOutline, InsertChart, BubbleChart, ShowChart, PieChart, ShortText, BarChart, Tv, Settings, Language, Public, TrendingUp, Transform, ChatBubble } from "@mui/icons-material";
import "../component/Sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Drawer
      variant="permanent"
      className={`sidebar ${collapsed ? "collapsed" : ""}`}
      sx={{
        width: collapsed ? 80 : 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: collapsed ? 80 : 240,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease-in-out',
        },
      }}
    >
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <IconButton onClick={() => setCollapsed(!collapsed)} className="toggle-button">
          {collapsed ? <Menu /> : <ArrowBackIos />}
        </IconButton>
      </div>

      {/* Sections */}
      <List>
        <Typography variant="h6" className={`sidebar-title ${collapsed ? "hidden" : ""}`}>Credit Assist</Typography>
        {[
          { icon: <PersonOutline />, text: "My Dashboard" },
          { icon: <InsertChart />, text: "Alpha Generator" },
          { icon: <BubbleChart />, text: "Company Analytics" },
          { icon: <ShowChart />, text: "News Analytics" },
          { icon: <PieChart />, text: "Pricing Analytics" },
          { icon: <ShortText />, text: "Relative Value" }
        ].map((item, index) => (
          <Tooltip key={index} title={collapsed ? item.text : ""} placement="right">
            <ListItemButton className="menu-item">
              <ListItemIcon className="menu-icon">{item.icon}</ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>

      <Divider className="divider" />
      
      <List>
        <Typography variant="h6" className={`sidebar-title ${collapsed ? "hidden" : ""}`}>Portfolio Assist</Typography>
        {[
          { icon: <BarChart />, text: "Portfolio Statistics" },
          { icon: <Tv />, text: "Portfolio Monitor" },
          { icon: <Settings />, text: "Portfolio Setup" },
          { icon: <Language />, text: "Portfolio ESG" },
          { icon: <Public />, text: "Portfolio Universe" },
          { icon: <TrendingUp />, text: "Benchmarks" },
          { icon: <Transform />, text: "Performance Backtest" }
        ].map((item, index) => (
          <Tooltip key={index} title={collapsed ? item.text : ""} placement="right">
            <ListItemButton className="menu-item">
              <ListItemIcon className="menu-icon">{item.icon}</ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>

      <Divider className="divider" />
      
      <List>
        <Typography variant="h6" className={`sidebar-title ${collapsed ? "hidden" : ""}`}>Chat Assist</Typography>
        <Tooltip title={collapsed ? "Gen AI Chat" : ""} placement="right">
          <ListItemButton className="menu-item">
            <ListItemIcon className="menu-icon"><ChatBubble /></ListItemIcon>
            {!collapsed && <ListItemText primary="Gen AI Chat" />}
          </ListItemButton>
        </Tooltip>
      </List>
    </Drawer>
  );
};

export default Sidebar;
