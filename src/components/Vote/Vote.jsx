import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upvote, downvote } from '../../store/voteSlice'
import styles from './Vote.module.css'

function Vote() {

  const vote = useSelector((state) => state.vote.value)
  const upClicked = useSelector((state) => state.vote.upClicked)
  const downClicked = useSelector((state) => state.vote.downClicked)
  const dispatch = useDispatch()

  return (
    <>
      <button 
      className={upClicked ? styles.upVote : ''}
      onClick={() => dispatch(upvote()) }>
        ⬆
      </button>
      <p
      className={
        upClicked ? styles.upVoteNum : 
        downClicked ? styles.downVoteNum : 
        ''
      }>
        {vote}
      </p>
      <button 
      className={downClicked ? styles.downVote : ''} 
      onClick={() => dispatch(downvote()) }>
        ⬇
      </button>
    </>
  )
}

export default Vote