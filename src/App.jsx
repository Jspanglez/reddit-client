import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import SideBar from './components/SideBar/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, clearPosts } from './store/postSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

function App() {
  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector((state) => state.posts)
  const currentSubreddit = useSelector((state) => state.subreddit.current) || 'popular'
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    dispatch(clearPosts())
    dispatch(fetchPosts(currentSubreddit))
  }, [dispatch, currentSubreddit])

  useEffect(() => {
    setFilteredPosts(posts)
  }, [posts])

  const handleSearch = (term) => {
    setSearchTerm(term)
    setHasSearched(true)
    const lowerCaseTerm = term.toLowerCase()
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(lowerCaseTerm) ||
      post.body.toLowerCase().includes(lowerCaseTerm)
    )
    setFilteredPosts(filtered)
  }

  const handleHomeClick = () => {
    window.location.reload()
  }

  return (
    <>
      <Header onSearch={handleSearch}/>
      <button
        className={'hamburger'}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Open sidebar"
      >
        &#9776;
      </button>
      <div>
        {loading && 
        <h2 className='message'>
          Loading posts...
          <br />
          <FontAwesomeIcon icon={faRedditAlien} beat style={{color: "#0091ff",}} className='messageIcon'/>
        </h2>}
        {error && 
        <h3 className='message'>
          {error}
          <br />
          <FontAwesomeIcon icon={faTriangleExclamation} style={{color: "#0091ff",}} className='messageIcon'/>
        </h3>}
        {!loading && !error && posts.length > 0 && hasSearched && filteredPosts.length === 0 && (
          <h2 className="message noPosts">
              <span>
                No posts containing <span className="searchTerm">{searchTerm}</span> found.
              </span>
            <FontAwesomeIcon icon={faGhost} style={{ color: "#0091ff" }} className="messageIcon" />
            <button onClick={handleHomeClick} className="homeBtn">Take me Home</button>
          </h2>
        )}
        {!loading &&
          !error &&
          filteredPosts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              body={post.body}
              userName={post.userName}
              time={post.time}
              comments={post.comments}
              subreddit={post.subreddit}
              postId={post.id}
              votes={post.votes}
              media={post.media}
              thumbnail={post.thumbnail}
            />
          ))}
      </div>
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  )
}

export default App
