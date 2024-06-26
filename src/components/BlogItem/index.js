import styled from 'styled-components'

const BlogItemWrapper = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  .title {
    margin: 0;
    font-size: 1.5em;
  }

  .author {
    margin: 5px 0;
    color: #666;
  }

  .summary {
    margin: 10px 0;
  }

  .date {
    margin: 0;
    color: #999;
    font-size: 0.9em;
  }
`

const BlogItem = ({post, onViewPost}) => (
  <BlogItemWrapper onClick={() => onViewPost(post.id)}>
    <h2 className="title">{post.title}</h2>
    <p className="author">{post.author}</p>
    <p className="summary">{post.summary}</p>
    <p className="date">{post.date}</p>
  </BlogItemWrapper>
)

export default BlogItem
