import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar({ onSearch }) {

  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = () => {
    onSearch(searchTerm)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={styles.searchContainer}>
      <input 
        type="text" 
        className={styles.input}
        placeholder='Search'
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.button} onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" className={styles.icon} />
      </button>
    </div>
  )
}

export default SearchBar