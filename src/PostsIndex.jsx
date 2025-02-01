export function PostIndex({ posts }) {
  return (
    <div id="recipes-index">
      <h1>All recipes</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>title: {post.title}</h2>
          <p>body: {post.body}</p>
          <p>image: <img src={post.image} /></p>
          <button>More info</button>
        </div>
      ))}

    </div>
  );
}
