import React from 'react'
import { Card, CardActions, CardContent, Typography, Button, makeStyles } from '@material-ui/core';



const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: "Monsterrat"
  },

  cover: {
    backgroundImage: `url(https://png.pngtree.com/background/20220731/original/pngtree-aesthetic-wallpaper-background-picture-image_1909932.jpg)`,
    backgroundPosition: "center",
    padding: "35px 25px",
  },
});


const Post = () => {
  const classes = useStyles();
  return (

    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          Explore the flower magic with Fiorello
        </Typography>
        <Typography variant='h5'>
          “Flowers are a proud assertion that a ray of beauty out values all the utilities in the world.”
          <br></br>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          - Ralph Waldo Emerson.
        </Typography>
      </CardContent>

      {/* <CardActions>
        <Button variant="text" className={classes.btn}>
          Read more...
        </Button>
      </CardActions> */}
      
    </Card>
  )
}

export default Post