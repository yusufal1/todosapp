import React from 'react'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <section className='header'>
        <h3 className='title'>NotesApp</h3>
        <SearchInput/>
    </section>
  )
}

export default Header