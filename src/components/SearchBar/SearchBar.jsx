import React from 'react'
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
  return (
    <span className={styles.span}>
      <input 
      type="text" 
      className={styles.input}
      placeholder='Search'/>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" className={styles.icon} />
      </button>
    </span>
  )
}

export default SearchBar