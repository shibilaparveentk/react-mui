
import { Container, Grid } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Postcard from './components/Postcard';
import { posts } from './Data/Data';
import Footer from './components/Footer';



function App() {
  return (
    <Container>
      <Header />
      <Post />
      <br></br>
      <Grid container spacing={4}>
        {
          posts.map((post)=>(
            <Postcard post={post} key={post.title}/>
          ))
        }

      </Grid>
      <Footer/>
    </Container>
  );
}

export default App;
