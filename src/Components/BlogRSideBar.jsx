import React from 'react'
import BolgTop from './BolgTop'
import Categories from './Categories'
import ExtraLinks from './ExtraLinks'
import Card3 from './Card3'

const BlogRSideBar = () => {
  return (
    <>
    <div>
     <BolgTop/>
    </div>
    <div className='container d-flex ' id='blog'>
     <Card3/>
     <Categories/>
    </div>
 
    <div className="mt-5">
     <ExtraLinks/>
    </div>
    </>
  )
}

export default BlogRSideBar
