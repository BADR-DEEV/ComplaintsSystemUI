import { Box, Button, Dialog, Hidden, IconButton, List, ListItem, ListItemText, Slide, Toolbar, Typography, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar/AppBar";
import logoImag from "../../assets/index"
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { Close, Notifications, NotificationsOutlined } from "@mui/icons-material";
import { TransitionProps } from "@mui/material/transitions";
import { theme } from "../../Utilities/ThemeProvider";

export default function Navbar() {
  const navItems = ['Complaints', 'Suggestions', 'Accounts', 'Settings'];
  const [open, setOpen] = React.useState(false);
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const Transition = React.forwardRef((
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) => {
    return <Slide direction="left" ref={ref} {...props} />;
  });

  return (
    <>
      <AppBar >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Box display="flex" alignItems="center" gap={0.5}>
              <img width="90px" height="70px" src={logoImag} alt="logo" />
              <Typography variant="h6" sx={{ width: "fit-content" }}>
                Company Name
              </Typography>
            </Box>
          </Box>
          <IconButton hidden={isSmall!} sx={{ color: 'inherit', marginLeft: "25px", marginRight: "30px" }}>
            <NotificationsOutlined />
          </IconButton>


          <Hidden >
            {/* <Box sx={{ display: { xs: 'block', sm: 'none' } }}> */}
            <IconButton size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleOpen}
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Dialog
              hidden={open == false ? true : false}
              open={open}
              fullScreen
              fullWidth
              TransitionComponent={Transition}
              hideBackdrop={true}
              PaperProps={{
                sx: {
                  boxShadow: 'none',
                },
              }}
            >
              <AppBar position="static" sx={{ background: "white", color: "text.primary" }}>
                <Toolbar>
                  <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    Menu
                  </Typography>
                  <IconButton onClick={handleClose} color="inherit">
                    <Close color="inherit" />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <List>
                {navItems.map((item) => (
                  <ListItem key={item}>
                    <Button fullWidth={true}>
                      <ListItemText primary={item} />
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Dialog>
            {/* </Box> */}
          </Hidden >
        </Toolbar>
      </AppBar>
    </>
  )
}
