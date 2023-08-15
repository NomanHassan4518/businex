import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import "../App.css";

// import required modules
import {  Navigation } from 'swiper/modules';
import { } from 'swiper/modules';
import Service0 from './Service0';
import FunFact from './FunFact';
import ExtraLinks from './ExtraLinks';
import AutoPlaySlider from './AutoPlaySlider';

const Service = () => {


  
  const test2 = [
    {
      img: "https://businex.jamstacktemplates.dev/static/media/h-2-t-01.c2e0d865.png",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0QUIyOEU2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0QUIyOEQ2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTJkODk5MC1hNDA3LTk1NDctYTI0NC02Yjg0YTBlNDhjZjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9EYFmwAAANBJREFUeNpiZEADoqKiLkCqnAETvH/9+nUYuuD///8xFIqJiYH0u2Ax496rV6/SQQwWLJK4NFUwEAGAlgpCzRDEIp0OYzBh8S02S98D8SwG4kAaDktBvp2F1WIcQQwCncBgfk+Cb7GagcxhGgjfovuYbr6FW0xv3yL7mK6+BWcnoG+NcfgW7FpoaKCDs2gOwuVbkJp7QIdhmMGCQwMMrMIh7grEe4gIfpDZu7FJMDEMEBi1eNTiUYtHLR56FoPK6rPQspcUcBaNvxqLGF4AEGAAgyhF43Oqjh8AAAAASUVORK5CYII=",
      desc: "Very much happy with provide the best Business Solutions for Clients to grow up their Business very sharply.",
      name: "David Loyed, ",
      position: "CTO, Aflex Group"
    },

    {
      img: "https://businex.jamstacktemplates.dev/static/media/h-2-t-02.11a7e7d6.png",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0QUIyOEU2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0QUIyOEQ2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTJkODk5MC1hNDA3LTk1NDctYTI0NC02Yjg0YTBlNDhjZjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9EYFmwAAANBJREFUeNpiZEADoqKiLkCqnAETvH/9+nUYuuD///8xFIqJiYH0u2Ax496rV6/SQQwWLJK4NFUwEAGAlgpCzRDEIp0OYzBh8S02S98D8SwG4kAaDktBvp2F1WIcQQwCncBgfk+Cb7GagcxhGgjfovuYbr6FW0xv3yL7mK6+BWcnoG+NcfgW7FpoaKCDs2gOwuVbkJp7QIdhmMGCQwMMrMIh7grEe4gIfpDZu7FJMDEMEBi1eNTiUYtHLR56FoPK6rPQspcUcBaNvxqLGF4AEGAAgyhF43Oqjh8AAAAASUVORK5CYII=",
      desc: "Very much happy with provide the best Business Solutions for Clients to grow up their Business very sharply.",
      name: "Alex Tuntuni, ",
      position: "Co-Founder, Tuntuni Group"
    },

    {
      img: "https://businex.jamstacktemplates.dev/static/media/h-2-t-03.02e4a342.png",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0QUIyOEU2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0QUIyOEQ2MEVDMTFFOUE3MDVFMkJCMzE0MEIxM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTJkODk5MC1hNDA3LTk1NDctYTI0NC02Yjg0YTBlNDhjZjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZGY0YWRjYTUtODJmMy1hOTQ4LThlZGQtNjRhZWEwZjFiOTNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9EYFmwAAANBJREFUeNpiZEADoqKiLkCqnAETvH/9+nUYuuD///8xFIqJiYH0u2Ax496rV6/SQQwWLJK4NFUwEAGAlgpCzRDEIp0OYzBh8S02S98D8SwG4kAaDktBvp2F1WIcQQwCncBgfk+Cb7GagcxhGgjfovuYbr6FW0xv3yL7mK6+BWcnoG+NcfgW7FpoaKCDs2gOwuVbkJp7QIdhmMGCQwMMrMIh7grEe4gIfpDZu7FJMDEMEBi1eNTiUYtHLR56FoPK6rPQspcUcBaNvxqLGF4AEGAAgyhF43Oqjh8AAAAASUVORK5CYII=",
      desc: "Very much happy with provide the best Business Solutions for Clients to grow up their Business very sharply.",
      name: "John Fault, ",
      position: "COO, Mafia Group"
    }
  ]


  return (
    <>
      <div className="main-service">
        <div className="main-service-items">
          <div className="main-content pt-5 text-white d-flex flex-column align-items-center justify-content-center h-75">
            <h1>OUR SERVICES</h1>
            <p>Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.</p>
          </div>
        </div>
      </div>

      <div className="about sm-top mb-5">
        <div className="container">
          <div className="row  align-item-lg-center">
            <div className="col-md-6 col-lg-6 ">
              <div className="about-content1 " >
                <h6>Our Services</h6>
                <h2>Provide best Business Solutions</h2>
                <span className="about-since">Since 2010</span>
                <p>
                  <strong>Busines</strong>
                  always try to provide the best Business Solutions for Clinets to grow up their Business very sharply and smoothly. We voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>



              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="about_img1 my-5">
                <img src="https://businex.jamstacktemplates.dev/static/media/about.85b87a68.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>




  <div>
    <Service0/>
  </div>


      <div className="Pricing sm-top">
        <div className="price-top text-center">
          <h6>PRICING PLAN</h6>
          <h2>Our Best Suitable Prices</h2>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-md-6 col-lg-4">
              <div className="price-plan">

                <div className="price-head">
                  <h6 className='mb-5'>Free</h6>
                  <div className="head-price">
                    <span className='dollar'>$</span>
                    <span className="prices">00</span>
                    <span className='price-type'>/mo</span>
                  </div>
                </div>

                <div className="price-body my-4">
                  <ul className="price-list">
                    <li>Branding strategy identity</li>
                    <li>Marketing campaign & PR</li>
                    <li>Website and app designing</li>
                    <li>Content development</li>
                  </ul>
                </div>

                <div className="price-footer mt-5">
                  <a href='/' className='btn-outline1'>SIGN UP TODAY</a>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-lg-4">
              <div className="price-plan">

                <div className="price-head">
                  <h6 className='mb-4'>Small Business</h6>
                  <div className="head-price">
                    <span className='dollar'>$</span>
                    <span className="prices">49</span>
                    <span className='price-type'>/mo</span>
                  </div>
                </div>

                <div className="price-body my-5">
                  <ul className="price-list">
                    <li>Content development</li>
                    <li>Branding strategy identity</li>
                    <li>Marketing campaign & PR</li>
                    <li>Website and app designing</li>
                  </ul>
                </div>

                <div className="price-footer mt-5">
                  <a href='/' className='btn-outline1'>SIGN UP TODAY</a>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-lg-4">
              <div className="price-plan">

                <div className="price-head">
                  <h6 className='mb-5'>Professional</h6>
                  <div className="head-price">
                    <span className='dollar'>$</span>
                    <span className="prices">99</span>
                    <span className='price-type'>/mo</span>
                  </div>
                </div>

                <div className="price-body my-4">
                  <ul className="price-list">
                    <li>Website and app designing</li>
                    <li>Content development</li>
                    <li>Branding strategy identity</li>
                    <li>Marketing campaign & PR</li>
                  </ul>
                </div>

                <div className="price-footer mt-5">
                  <a href='/' className='btn-outline1'>SIGN UP TODAY</a>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>








      
      <div className="test-home-2 sm-top">
        <div className="test2-items my-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
          
            navigation={true}
            modules={[ Navigation]}
            className="mySwiper swiper3"
          >
            {
              test2.map((a) => (
                <SwiperSlide>

                  <div className="row ">
                    <div className="container d-flex align-items-center" style={{ height: "100vh" }}>
                      <div className="col-md-6">
                        <div className="test2-img">
                          <img src={a.img} alt="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="test2-otherdetails">
                          <div className="test2-top">
                            <h6>TESTIMONIALS</h6>
                            <h2>Don’t Believe us, Check Client Word</h2>
                            <p>More over <strong>1900+</strong>customer</p>
                          </div>

                          <div className="test2-middle">
                            <div className="test2-icons mt-5">
                              <img src={a.icon} alt="" />
                            </div>
                            <div className="test2-desc mt-3">
                              <p>{a.desc}</p>
                            </div>
                            <div className="test2-bottom">
                              <p><strong>{a.name}</strong> {a.position}</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              ))
            }
          </Swiper>

        </div>
      </div>

<AutoPlaySlider/>

       <FunFact/>

     <ExtraLinks/>
    </>
  )
}

export default Service
