import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';
import axios from "axios";
// import { useState, useEffect } from 'react'


export function PostsPage() {
  let posts = [
    {
      id: 1,
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 2,
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 3,
      title: "___",
      body: "___",
      image: "___",
    },
  ];  return (
    <div>
    <PostsNew />
    <PostsIndex posts = {posts}/>
  </div>
  )
}
//don't understand this shit even a little bit

// export function handleIndex () {
//   axios.get('http://localhost:3000/posts.json');
//   this.props.posts = response.data
// }
