import React from 'react'

const ExtraLinks = () => {
  return (
    <div className="bottom">
    <div className="container ">
      <div className="row d-flex ">
      
          <div className="col-md-8 col-lg-6 ">
           <div className="class-left sm-top ">
              <h2>Get Started Today</h2>
              <p>
                <strong>Businex</strong>  always try to provide the best Business Solutions for Clients to grow up their Business sharply and smoothly.
              </p>
            </div>
           </div>

           <div className="col-md-4 col-lg-6 d-flex align-items-center justify-content-end">
           <div className="class-right sm-top">
              <a className='btn-outline' href='/'>Contact Us</a>
            </div>
        
          </div>
        
        
      </div>
    

    <div className="footer-area">
      <div className="row ">
        <div className="col-md-3">
          <div className="footer-first">
           <a href='/'>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAlCAYAAABLaKs6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRFQTY1NEE2MTk1MTFFOTk5REFCODMwMzY1NjBGNjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRFQTY1NDk2MTk1MTFFOTk5REFCODMwMzY1NjBGNjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwZWI4NDNhLTI4MzAtZTY0Yy1iYzRkLWI1YTczMDYyMDdmMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiLz4gPC9y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" alt="" />
           </a>
            <p>During the summer my wife and I got to go on an amazing road trip in Vancouver.</p>
            <div className="first-bottom">
              <p style={{fontWeight:"500"}}>© 2023 Businex Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3  ">
          <div className="footer-links p-3 mx-5">
            <h4>Information</h4>
            <div className="linksList">
              <li>
                <a href='/'>Our Company</a>
              </li>
              <li>
                <a href='/'>Contact Us</a>
              </li>
              <li>
                <a href='/'>Our Services</a>
              </li>
              <li>
                <a href='/'>Careers</a>
              </li>
            </div>
          </div>
        </div>
        

        <div className="col-md-3 ">
          <div className="footer-links p-3 mx-5">
            <h4>Social Links</h4>
            <div className="linksList">
              <li>
                <a href='/'>
                Facebook
                </a>
              </li>
              <li>
                <a href='/'>Twitter</a>
              </li>
              <li>
                <a href='/'>Dribbble</a>
              </li>
              <li>
                <a href='/'>Instragram</a>
              </li>
            </div>
          </div>
        </div>

        <div className="col-md-3 ">
          <div className="footer-contact p-3 mx-3">
            <h4>Contact Us</h4>
            <div className="footer-contact-body">
              <address >
              2005 Stokes Isle Apartment. 896, Washington 10010, USA
              <br />
              https://example.com
              <br />
              (+68) 120034509
              </address>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  </div>
  )
}

export default ExtraLinks
