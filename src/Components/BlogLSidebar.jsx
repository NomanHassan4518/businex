import React from 'react'
import BolgTop from './BolgTop'
import Categories from './Categories'
import ExtraLinks from './ExtraLinks'
import Card3 from './Card3'

const BlogLSidebar = () => {
  return (
   <>
   <div>
    <BolgTop/>
   </div>
   <div className='container  d-flex' id='blog'>
    <Categories/>
    <Card3/>
   </div>

   <div className="mt-5">
    <ExtraLinks/>
   </div>
   </>
  )
}

export default BlogLSidebar
