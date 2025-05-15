import React, { useState } from 'react'
import styles from './Card.module.css'
import Vote from '../Vote/Vote'
import Comment from '../Comment/Comment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'

 export function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  }
  return num.toString()
}

function Card({title, body, userName, time, comments, subreddit, postId, votes, media, thumbnail}) {

  const [showComments, setShowComments] = useState(false)

  const handleComments = () => {
    setShowComments((prev) => !prev)
  }

  const isValidThumbnail = thumbnail && !['self', 'default', 'nsfw', 'image'].includes(thumbnail);

  return (
    <main className={styles.cardContainer}>
      <div className={styles.cardTopContainer}>
        <Vote votes={votes} />
        <div className={styles.titleMediaContainer}>
          <h3 className={styles.title}>{title}</h3>
          {body ? <p className={styles.postBody}>{body}</p> : null}
            {media && (
            <div className={styles.mediaContainer}>
              {/\.(jpg|jpeg|png|gif)(\?.*)?$/.test(media) || media.includes('i.redd.it') ? (
                <img
                  src={media}
                  alt="Post media"
                  className={styles.media}
                />
              ) : media.includes('v.redd.it') ? (
                <video controls className={styles.media}>
                  <source src={media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </div>
          )}
        </div>
        {!media && isValidThumbnail && (
          <img src={thumbnail} alt="Post thumbnail" className={styles.thumbnail} />
        )}
      </div>
      <br />
      <hr />
      <div className={styles.cardBottomContainer}>
        <p className={styles.userName}>{userName}</p>
        <p>{time}</p>
        <button onClick={handleComments} className={styles.commentNum}>
          <FontAwesomeIcon icon={faMessage} style={{color: "#0091ff", marginTop: "2px"}} />
          {formatNumber(comments)}
        </button>
      </div>
      <Comment 
        subreddit={subreddit}
        postId={postId}
        commentSection={showComments}/>
    </main>
  )
}

export default Card