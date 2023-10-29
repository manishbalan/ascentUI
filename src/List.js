import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./logo.png";
import FormCmp from "./FormCmp";
import { Stack } from "@mui/material";

import {
  Dashboard,
  CollectionsBookmark,
  DeveloperBoard,
} from "@mui/icons-material";

const drawWidth = 220;

export default function Last1() {
  const [mobileViewOpen, setMobileViewOpen] = React.useState(false);

  const handleToggle = () => {
    setMobileViewOpen(!mobileViewOpen);
  };

  const responsiveDrawer = (
    <div style={{ backgroundColor: "#FDFEFF", height: "100%" }}>
      <img src={logo} alt="Logo" width="80%" height="10%" />
      <Divider />
      <Typography
        sx={{ textAlign: "center", pt: 4, color: "green", fontSize: 20 }}
      ></Typography>
      <List sx={{ backgroundColor: "#FDFEFF" }}>
        <ListItemButton sx={{ color: "#3C4043" }}>
          <ListItemIcon sx={{ color: "#3C4043" }}>
            {<Dashboard />}
          </ListItemIcon>
          <ListItemText primary={"DashBoard"} />
        </ListItemButton>
        <ListItemButton sx={{ color: "#3C4043" }}>
          <ListItemIcon sx={{ color: "#3C4043" }}>
            {<DeveloperBoard />}
          </ListItemIcon>
          <ListItemText primary={"Monthly Process"} />
        </ListItemButton>
        <ListItemButton sx={{ color: "#3C4043" }}>
          <ListItemIcon sx={{ color: "#3C4043" }}>{<CollectionsBookmark />}</ListItemIcon>
          <ListItemText primary={"Super Configura.."} />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton sx={{ color: "#3C4043" }}>
          <ListItemIcon sx={{ color: "#3C4043" }}>{<Dashboard />}</ListItemIcon>
          <ListItemText primary={"Suggest"} />
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <div>
      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawWidth}px)` },
              ml: { sm: `${drawWidth}px` },
              backgroundColor: "#FFFFFF",
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Stack spacing={4} direction="row" sx={{ marginBottom: 2 }}>
                <Box>
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: "#DADCE0",
                      fontSize: 15,
                    }}
                  >
                    Pay Cycle: 31-May-2021 to 31-June-2021
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: "#3C4043",
                      fontSize: 15,
                    }}
                  >
                    Amazon India Pvt Ltd
                  </Typography>
                </Box>
              </Stack>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawWidth }, flexShrink: { sm: 0 } }}
          >
            <Drawer
              variant="temporary"
              open={mobileViewOpen}
              onClose={handleToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawWidth,
                },
              }}
            >
              {responsiveDrawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawWidth,
                },
              }}
              open
            >
              {responsiveDrawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawWidth}px)` },
            }}
          >
            <Toolbar />
            <Typography>
              <FormCmp />
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
}
