import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { NavLink, useNavigate } from "react-router-dom";
import '../App.css';
import { AppBar, Typography, Toolbar, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// import { theme } from "../constants/StyleConstants";
import {theme} from '../../Utilities/ThemeProvider'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GroupIcon from '@mui/icons-material/Group';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LoginIcon from '@mui/icons-material/Login';
// import { logout } from "../features/auth/AuthSlice";
import { useDispatch } from "react-redux";
import Home from "@mui/icons-material/Home";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
// import FormDialog from "./dialog"
const NavigationBar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  // const delay = ms => new Promise(res => setTimeout(res, ms));

//   const logoutHandleer = async () => {
//     dispatch(logout())
//     window.location.reload()
//   }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky"  elevation={20} >
        <Toolbar>
          <Grid container justifyContent="flex-start" alignItems="center">
            <Grid item>
              <Drawer
                onClose={() => setOpen(false)}
                open={open}
                PaperProps={{
                  sx: { backgroundColor: "#1a1c20", width: 350 }
                }}>
                <List>
                  <br />

                  <ListItem>
                    <Button onClick={() => setOpen(!open)}>
                      {/* {open ? "Hide" : "Show"} Drawer */}
                      <CloseIcon sx={{ color: "white", }} />
                    </Button>
                  </ListItem>
                  {/* <SearchBar /> */}
                  <br />
                  <br />
                  {/* -----START HOME------- */}
                  <NavLink style={{ textDecoration: "none" }} to="/home">
                    <ListItem button onClick={() => setOpen(false)}>
                      <NavLink style={{ textDecoration: "none" }} to="/home"
                        className={({ isActive }) => (isActive ? 'colorRed' : 'ColorBlack')}>
                        <ListItemIcon>
                          <ListItem
                            style={{
                              textDecoration: "none",
                              color: "#fff",
                              fontWeight: "bolder",
                            }}>
                            <Home sx={{ color: "white" }} /> &nbsp;Home
                          </ListItem>
                        </ListItemIcon>
                      </NavLink>
                    </ListItem>
                  </NavLink>
                  {/* -----END OF HOME------- */}


                  {/* -----START MOVIES------- */}
                  <NavLink style={{ textDecoration: "none" }} to="/movies" >
                    <ListItem button onClick={() => setOpen(false)} >
                      <NavLink style={{ textDecoration: "none" }} to="/movies"
                        className={({ isActive }) => (isActive ? 'colorRed' : 'ColorBlack')}>
                        <ListItemIcon>
                          <ListItem
                            style={{
                              textDecoration: "none",
                              color: "#fff",
                              fontWeight: "bolder",
                            }}>
                            <LocalMoviesIcon sx={{ color: "white" }} /> &nbsp;Movies
                          </ListItem>
                        </ListItemIcon>
                      </NavLink>
                    </ListItem>
                  </NavLink>
                  {/* -----END OF MOVIES------- */}


                  {/* -----START ACTORS------- */}
                  <NavLink style={{ textDecoration: "none" }} to="/actors" >
                    <ListItem button onClick={() => setOpen(false)} >
                      <NavLink style={{ textDecoration: "none" }} to="/actors"
                        className={({ isActive }) => (isActive ? 'colorRed' : 'ColorBlack')}>
                        <ListItemIcon>
                          <ListItem
                            style={{
                              textDecoration: "none",
                              color: "#fff",
                              fontWeight: "bolder",
                            }}>
                            <GroupIcon sx={{ color: "white" }} /> &nbsp;Actors
                          </ListItem>
                        </ListItemIcon>
                      </NavLink>
                    </ListItem>
                  </NavLink>
                  {/* -----END OF ACTORS------- */}

                  {/* -----START USERS------- */}
                  <NavLink style={{ textDecoration: "none" }} to="/users" >
                    <ListItem button onClick={() => setOpen(false)} >
                      <NavLink style={{ textDecoration: "none" }} to="/users"
                        className={({ isActive }) => (isActive ? 'colorRed' : 'ColorBlack')}>
                        <ListItemIcon>
                          <ListItem
                            style={{
                              textDecoration: "none",
                              color: "#fff",
                              fontWeight: "bolder",
                            }}>
                            <PersonIcon sx={{ color: "white" }} /> &nbsp;Users
                          </ListItem>
                        </ListItemIcon>
                      </NavLink>
                    </ListItem>
                  </NavLink>
                  {/* -----END OF USETS------- */}


                  {/* -----START GENRES------- */}
                  <NavLink style={{ textDecoration: "none" }} to="/genres" >
                    <ListItem button onClick={() => setOpen(false)} >
                      <NavLink style={{ textDecoration: "none" }} to="/genres"
                        className={({ isActive }) => (isActive ? 'colorRed' : 'ColorBlack')}>
                        <ListItemIcon>
                          <ListItem
                            style={{
                              textDecoration: "none",
                              color: "#fff",
                              fontWeight: "bolder",
                            }}>
                            <CategoryIcon sx={{ color: "white" }} /> &nbsp;Genres
                          </ListItem>
                        </ListItemIcon>
                      </NavLink>
                    </ListItem>
                  </NavLink>
                  {/* -----END OF GENRES------- */}

                  <ListItem >
                    <ListItemIcon>
                      <ListItem
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          fontWeight: "bolder",
                        }}>
                        <SettingsIcon sx={{ color: "white" }} /> &nbsp;Settings
                      </ListItem>
                    </ListItemIcon>
                  </ListItem>

                  <Box sx={{ position: "relative", bottom: "-170px" }}>
                    <ListItem >
                      <ListItemIcon>
                        <ListItem
                          style={{
                            textDecoration: "none",
                            color: "#fff",
                            fontWeight: "bolder",
                          }}>
                          <LoginIcon sx={{ color: "white" }} /> &nbsp;Sign out
                        </ListItem>
                      </ListItemIcon>
                    </ListItem>
                  </Box>



                </List>
              </Drawer>
            </Grid>
            <Grid item>
              <Button onClick={() => setOpen(!open)}>
                <MenuIcon sx={{ color: "white" }} />
              </Button>
            </Grid>
            <Typography variant="h6" color="#FBFBFD">
              Movies App
            </Typography>


          </Grid>

          <Box sx={{ marginRight: "25px", color: "white" }}>
          </Box>
          <DashboardIcon sx={{ color: "white" }} /> &nbsp;Movies&nbsp;Dashboard


        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavigationBar;