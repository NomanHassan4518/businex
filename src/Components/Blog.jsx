import React from 'react';

import CardsTwo from './CardsTwo';
import Categories from './Categories';
import ExtraLinks from './ExtraLinks';
import BolgTop from './BolgTop';

const Blog = () => {

  
    return (
     <>
          <div className='b'>
            <BolgTop/>
          </div>

       
    
      <div className="d-flex" id='blog'>
      <CardsTwo/>
       <Categories/>
      </div>
     <div className="mt-5">
     <ExtraLinks/>
     </div>
        </>
    )
}

export default Blog
