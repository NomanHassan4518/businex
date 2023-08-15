import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import "../App.css";

// import required modules
import {  Navigation } from 'swiper/modules';
const Test2 = () => {
    
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

                  <div className="row  d-flex align-items-center">

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
                </SwiperSlide>

              ))
            }
          </Swiper>

        </div>
      </div>

      <div className="team2-home">
        <div className="row d-flex">
          <div className="col-xl-4">
            <div className="team2-brand text-light px-5 text-md-left">
              <h6> CREATIVE TEAM</h6>
              <h2>We have great creative team</h2>
              <p><strong>Businex</strong>  always try to provide the best Business Solutions for Clients to grow up their Business sharp and smoothly. We voluptatem voluptas aspernatur aut odit fugit, quia consequuur magni dolores eos qui ratione.</p>



            </div>
          </div>

          <div className="col-xl-8">
            <div className="team2imgs d-flex " >

              <div className="col-md-2  col-lg-3">
                <div className="team2-imgs">
                  <img src="https://businex.jamstacktemplates.dev/static/media/h-2-01.b1549d14.png" alt="" />
                </div>
              </div>
              

              <div className="col-md-2 col-lg-3">
                <div className="team2-imgs">
                  <img src="https://businex.jamstacktemplates.dev/static/media/h-2-02.e5a73e01.png" alt="" />
                </div>
              </div>

              <div className="col-md-2 col-lg-3">
                <div className="team2-imgs">
                  <img src="https://businex.jamstacktemplates.dev/static/media/h-2-03.869544a3.png" alt="" />
                </div>
              </div>

              <div className="col-md-2 col-lg-3">
                <div className="team2-imgs">
                  <img src="https://businex.jamstacktemplates.dev/static/media/h-2-04.242dad24.png" alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


   </>
  )
}

export default Test2
