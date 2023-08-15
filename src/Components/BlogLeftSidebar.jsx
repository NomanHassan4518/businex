import React from 'react'
import BolgTop from './BolgTop'
import Categories from './Categories'
import CardsTwo from './CardsTwo'
import ExtraLinks from './ExtraLinks'

const BlogLeftSidebar = () => {
  return (
    <>
      <div>
        <BolgTop />

      </div>
      <div className="d-flex" id='blog'>
        <Categories />
        <CardsTwo />
      </div>

      <div className="mt-5">
        <ExtraLinks />
      </div>
    </>
  )
}

export default BlogLeftSidebar
