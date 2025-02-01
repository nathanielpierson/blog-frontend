import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';
import axios from "axios";
import { useState, useEffect } from 'react'


function PostsPage() {

  let posts = [];
  return (
  <div>
    <PostsNew />
    <PostsIndex posts = {posts}/>
  </div>
  )
}

function handleIndex () {
  axios.get('http://localhost:3000/posts.json');
  // posts = response.data
}

// const [posts, setPosts] = useState([]);
// useEffect(handleIndex, []);