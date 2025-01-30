function PostIndex({ posts }) {
  return (
    <div id="recipes-index">
      <h1>All recipes</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>body: {post.body}</p>
          <p><img src={post.image_url} /></p>
          <button>More info</button>
        </div>
      ))}

    </div>
  );
}
