import React from 'react'
import { Grid, Card, makeStyles, CardContent, Typography, CardMedia, Hidden } from '@material-ui/core'


const useStyles = makeStyles({
  Card: {
    display: "flex",
  },

  CardContent: {
    flex: 1,
  },

  CardMedia: {
    width: 450
  },
  
  CardDetails:{
    fontFamily:"Helvetica-BoldOblique",
    fontSize:18,
    backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrD3qqRCWy0sPdx1e6j8X3XaMgbRCZShu7eQ&usqp=CAU)",
  }
}
);

const Postcard = ({ post }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.Card}>
        <div className={classes.CardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5" >
              {post.title}
            </Typography>

            <Typography variant='sub1' color="textSecondary" >
              {post.date}
            </Typography>

            <hr></hr>

            <Typography variant='sub1' paragraph  >
              {post.description}
            </Typography>

          </CardContent>
        </div>

        <Hidden xsDown>
          <CardMedia className={classes.CardMedia}
            image={post.image} />
        </Hidden>
      </Card>
    </Grid>
  )
}

export default Postcard