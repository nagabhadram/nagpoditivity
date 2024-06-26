import {useState, useEffect} from 'react'
import styled from 'styled-components'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import BlogForm from './components/BlogForm'
import {initialPosts} from './mockData'

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const App = () => {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [editingPost, setEditingPost] = useState(null)

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || initialPosts
    setPosts(savedPosts)
  }, [])

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  const handleViewPost = postId => {
    const post = posts.find(p => p.id === postId)
    setSelectedPost(post)
    setEditingPost(null)
  }

  const handleAddOrEditPost = newPostData => {
    if (newPostData.id) {
      setPosts(posts.map(p => (p.id === newPostData.id ? newPostData : p)))
    } else {
      const updatedPosts = [...posts, {...newPostData, id: Date.now()}]
      setPosts(updatedPosts)
    }
    setSelectedPost(newPostData)
    setEditingPost(null)
  }

  const handleDeletePost = postId => {
    setPosts(posts.filter(p => p.id !== postId))
    setSelectedPost(null)
  }

  const handleEditPost = post => {
    setEditingPost(post)
    setSelectedPost(null)
  }

  return (
    <AppContainer>
      {!selectedPost && !editingPost && (
        <>
          <BlogList posts={posts} onViewPost={handleViewPost} />
          <button type="button" onClick={() => setEditingPost({})}>
            Add Post
          </button>
        </>
      )}
      {selectedPost && (
        <>
          <BlogPost post={selectedPost} />
          <button type="button" onClick={() => handleEditPost(selectedPost)}>
            Edit
          </button>
          <button
            type="button"
            onClick={() => handleDeletePost(selectedPost.id)}
          >
            Delete
          </button>
          <button type="button" onClick={() => setSelectedPost(null)}>
            Back to List
          </button>
        </>
      )}
      {editingPost && (
        <BlogForm post={editingPost} onSubmit={handleAddOrEditPost} />
      )}
    </AppContainer>
  )
}

export default App
