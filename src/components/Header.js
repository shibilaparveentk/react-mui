import React from 'react'
import { Divider, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontStyle: "italic"
  },
  title2: {
    fontSize: 20,
    justifyContent: "center",
    fontFamily: "Monsterrat",
  }
}))

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <IconButton >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title} >
          FIORELLO
        </Typography>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <SearchIcon />
        </IconButton>

        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <Toolbar className={classes.title2}>
        Fiorello - Elementor Flower Site</Toolbar>
      <Divider />
    </>
  )
}

export default Header