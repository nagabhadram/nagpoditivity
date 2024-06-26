import './index.css'

const BlogPost = ({post}) => {
  if (!post) return <p>Post not found</p>

  return (
    <div className="blog-post">
      <h1 className="title">{post.title}</h1>
      <p className="author">By {post.author}</p>
      <p className="date">Published on {post.date}</p>
      <p className="content">{post.content}</p>
    </div>
  )
}

export default BlogPost
