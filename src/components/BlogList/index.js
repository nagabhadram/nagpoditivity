import styled from 'styled-components'
import BlogItem from '../BlogItem'

const BlogListWrapper = styled.div`
  padding: 20px;
`

const BlogList = ({posts, onViewPost}) => (
  <BlogListWrapper>
    {posts.map(post => (
      <BlogItem key={post.id} post={post} onViewPost={onViewPost} />
    ))}
  </BlogListWrapper>
)

export default BlogList
