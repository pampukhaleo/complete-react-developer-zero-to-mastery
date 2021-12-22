import React from 'react';

import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input 
            className='search' 
            type='search' 
            placeholder={placeholder} //search input
            onChange={handleChange} //geting value on change
        />
  )
}