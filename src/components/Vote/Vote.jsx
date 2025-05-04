import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upvote, downvote } from '../../store/voteSlice'
import styles from './Vote.module.css'
import { TbArrowBigUp } from "react-icons/tb"
import { TbArrowBigUpFilled } from "react-icons/tb"
import { TbArrowBigDown } from "react-icons/tb"
import { TbArrowBigDownFilled } from "react-icons/tb"

function Vote() {

  const vote = useSelector((state) => state.vote.value)
  const upClicked = useSelector((state) => state.vote.upClicked)
  const downClicked = useSelector((state) => state.vote.downClicked)
  const dispatch = useDispatch()

  return (
    <div>
      <button 
      onClick={() => dispatch(upvote()) }>
        {upClicked ? (
          <TbArrowBigUpFilled className={styles.upVote} />
        ) : (
          <TbArrowBigUp />
        )}
      </button>
      <p
        className={`${styles.defaultVoteNum} ${
          upClicked ? styles.upVoteNum : downClicked ? styles.downVoteNum : ''
        }`}
      >
        {vote}
      </p>
      <button 
      onClick={() => dispatch(downvote()) }>
        {downClicked ? (
          <TbArrowBigDownFilled className={styles.downVote} />
        ) : (
          <TbArrowBigDown />
        )}
      </button>
    </div>
  )
}

export default Vote