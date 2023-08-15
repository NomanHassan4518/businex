import React from 'react'
import ExtraLinks from './ExtraLinks'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter, AiFillRedditCircle } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const BlogDetails = () => {
  return (
    <>
      <div className="main-blog">
        <div className="main-blog-items">
          <div className="main-content pt-5 text-white d-flex flex-column align-items-center justify-content-center h-75">
            <h1>WILD LIFE WORKSHOP</h1>
            <p>Habitat loss, climate change, poaching, and pollution paint a bleaked climate changed, poaching picture for threatened</p>
          </div>
        </div>
      </div>

      <div className="container main-img mt-5">
        <img src="https://businex.jamstacktemplates.dev/static/media/14.3980f02f.jpg" className='my-5' alt="" />
      </div>


      <div className="main-content d-flex" id='blog'>
        <div className="col-lg-3">
          <div className="container">
            <div className="left-items mx-5 my-1 text-center">
              <img src="https://businex.jamstacktemplates.dev/static/media/02.4817d3a8.jpg" alt="" />
              <h6 className='mt-3'>KB Arifa</h6>
              <p>Senior Writer</p>
              <div className="blog-icons text-center d-flex">
                <BiLogoFacebook className='main-blog-icons' />
                <AiOutlineTwitter className='main-blog-icons mx-2' />
                <FaLinkedinIn className='main-blog-icons' />
              </div>
            </div>
          </div>
        </div>


        <div className="col-lg-9">
          <div className="right-items my-1 mx-5">
            <div className="top">
              <h2>Wild Life Workshop</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi quibusdam quos ratione rem saepe sequi sit unde ut velit vitae. Amet ea error expedita, laboriosam maxime officiis porro ut velit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi</p>
            </div>

            <div className="middle">
              <p>dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi</p>
            </div>


            <div className="bottom1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi quibusdam quos ratione rem saepe sequi sit unde ut velit vitae. Amet ea error expedita, laboriosam maxime officiis porro ut velit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi</p>
              <div className="bottom-end text-center mt-5">
                <h6>SHARE THIS ARTICLE</h6>
              </div>
            </div>

          </div>

          <div className="social-icons d-flex justify-content-center my-4">
            <a className='facebook' href='https://www.facebook.com/sharer/sharer.php?u=https://businex.jamstacktemplates.dev/blog/wild-life-workshop?id=14'><BiLogoFacebook /></a>

            <a className='twitter' href='https://twitter.com/home?status=https://businex.jamstacktemplates.dev/blog/wild-life-workshop?id=14'><AiOutlineTwitter/></a>

            <a className='reddit' href='http://reddit.com/submit?url=https://businex.jamstacktemplates.dev/blog/wild-life-workshop?id=14&title=Wild%20Life%20Workshop'><AiFillRedditCircle /></a>

            <a className='pinterest' href='https://pinterest.com/pin/create/button/?url=https://businex.jamstacktemplates.dev/blog/wild-life-workshop?id=14&media=&description='><BsPinterest /></a>


          </div>
        </div>
      </div>



     

      <div div className="mt-5" >
        <ExtraLinks />
      </div>
    </ >

  )
}

export default BlogDetails
