import { Container, Typography, makeStyles, Link } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6, 0),
    marginTop: theme.spacing(4),
    backgroundImage: "url(https://e1.pxfuel.com/desktop-wallpaper/710/390/desktop-wallpaper-whatsapp-original-chat-backgrounds-%C2%B7-github-chat-thumbnail.jpg)"
  },
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="body1" color="textSecondary" align="center">
          <img src='https://fiorelloplants.gr/wp-content/uploads/2021/02/logo-fiorello-black.png'></img>
          <br></br>
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            www.fiorello.com 2023
          </Link>
        </Typography> 
      </Container>
    </footer>
  )
}

export default Footer