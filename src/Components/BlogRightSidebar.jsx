import React from 'react'
import BolgTop from './BolgTop'
import CardsTwo from './CardsTwo'
import Categories from './Categories'
import ExtraLinks from './ExtraLinks'

const BlogRightSidebar = () => {
    return (
        <>
            <div>
                <BolgTop />
            </div>



            <div className="d-flex" id='blog'>
                <CardsTwo />
                <Categories />
            </div>
            <div className="mt-5">
                <ExtraLinks />
            </div>
        </>
    )
}

export default BlogRightSidebar
