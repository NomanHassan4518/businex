import React from 'react'
import BolgTop from './BolgTop'
import Card2 from './Card2'
import ExtraLinks from './ExtraLinks'

const BlogWithoutSidebar = () => {
  return (

  <>
    <div>
        <BolgTop/>
      
    </div>
    <div className="container">
       <Card2/>
    </div>

    <div className="mt-5">
        <ExtraLinks/>
    </div>
  </>
  )
}

export default BlogWithoutSidebar
