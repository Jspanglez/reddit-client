import React, { useState, useEffect } from "react";
import styles from './Comment.module.css'
import { getRelativeTime } from '../../assets/getRelativeTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function Comment({ subreddit, postId, commentSection }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!commentSection) {
      setLoading(false)
      return
    }

    const fetchComments = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`)
        const data = await response.json()
        const commentsData = data[1].data.children.map((child) => ({
          id: child.data.id,
          userName: child.data.author,
          time: getRelativeTime(child.data.created_utc),
          body: child.data.body,
        }))
        setComments(commentsData)
        setLoading(false)
      } catch (err) {
        setError('Failed to load comments')
        setLoading(false)
      }
    }

    fetchComments();
  }, [subreddit, postId, commentSection])
  
  if (loading) {
    return (
      <div className={styles.loading}>
        <h4>Loading comments...</h4>
        <FontAwesomeIcon icon={faRedditAlien} beat style={{color: "#0091ff",}} className={styles.loadingIcon}/>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className={styles.loading}>
        <h4>{error}</h4>
        <FontAwesomeIcon icon={faTriangleExclamation} style={{color: "#0091ff",}} className={styles.loadingIcon}/>
      </div>
    )
  }

  if (!commentSection) {
    return null
  }
  
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <div className={styles.commentTop}>
            <p className={styles.userName}>{comment.userName}</p>
            <p className={styles.time}>{comment.time}</p>
          </div>
          <p className={styles.body}>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Comment