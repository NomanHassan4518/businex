import React, { useState } from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  let a = <h3>SHOPPING TOOLS</h3>
  return (
    <>
      <nav className="navbar nav-class fixed-top navbar-expand-lg itemms ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAlCAYAAABLaKs6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTdBQjU5OTk1RjZEMTFFOThDQTg4RjU3NzUwOEM3OTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTdBQjU5OTg1RjZEMTFFOThDQTg4RjU3NzUwOEM3OTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwZWI4NDNhLTI4MzAtZTY0Yy1iYzRkLWI1YTczMDYyMDdmMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpkZjRhZGNhNS04MmYzLWE5NDgtOGVkZC02NGFlYTBmMWI5M2QiLz4gPC9y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" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item dropdown mx-3 ">

                <Link class="nav-link dropdown-toggle text-white" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  HOME
                </Link>

                <ul className="dropdown-menu menu" aria-labelledby="navbarDropdown" >
                  <li>
                    <Link className="dropdown-item" to="/home1">Home 01</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/home2">Home 02</Link>
                  </li>
                </ul>

              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-white" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-white" to="/service">SERVICE</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-white" to="/team">TEAM</Link>
              </li>
              <li className="nav-item dropdown mx-3">
                <Link class="nav-link dropdown-toggle text-white" to="/blog" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  BLOG
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item  pt-2" to="/blogleftsidebar">Blog Grid Left Sidebar</Link></li>
                  <li><Link className="dropdown-item  pt-4" to="/blogrightsidebar">Blog Grid Right Sidebad</Link></li>
                  <li><Link className="dropdown-item  pt-4" to="/blogwithoutsidebar">Blog Grid Without Sidebar</Link></li>
                  <li><Link className="dropdown-item  pt-4" to="/bloglsidebar">Blog List Left Sidebar</Link></li>
                  <li><Link className="dropdown-item  pt-4" to="/blogrsidebar">Blog List Right Sidebar</Link></li>
                  <li><Link className="dropdown-item  pt-4" to="/blogdetails">Blog Details</Link></li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-white" to="/contact">CONTACT</Link>
              </li>
            </ul>

            <div className="header-right text-right">
              <Link to='/' className='text-light f-32 mx-3 text-decoration-none'>+998 23568 658</Link>
              <Link className='text-decoration-none' style={{ cursor: "pointer" }}>
                <AiFillSetting className='navbar_icons mx-3' style={{ cursor: "pointer" }} onClick={() => { setVisible(true) }} />
              </Link>
            </div>
          </div>
        </div>
      </nav>


      <Drawer className='drawer'
        title={a}
        placement="right"
        closable={true}
        open={visible}
        onClose={() => {
          setVisible(false)
        }}

      >

        <div className="login-form">
          <div className="contents">
            <div className="form-title">
              <h2>Login</h2>
            </div>

            <div className="formcontent mt-2">
              <input type="text" placeholder='Username' className='mt-3'/>
              <input type="password" placeholder='Password' className='mt-3'/>
              <div>
                <button type='submit' className='btn-submit mt-3'>Login</button>

              </div>
              <div className="creat mt-3">
                <span>Not Resisted?
                  <a href='/'>Creat Account Now</a>
                </span>
              </div>
            </div>

            <div className="sm-top">
              <a className='facebook1' href='https://www.facebook.com/sharer/sharer.php?u=https://businex.jamstacktemplates.dev/blog/wild-life-workshop?id=14'><BiLogoFacebook /></a>

              <a className='twitter1' href='https://twitter.com/home?status=https://businex.jamstacktemplates.dev/blog/wild-life-workshop?id=14'><AiOutlineTwitter /></a>

              <a className='linkedin' href='https://linkedin.com/hasthemes'><BiLogoLinkedin /></a>

              <a className='pinterest1' href='https://pinterest.com/pin/create/button/?url=https://businex.jamstacktemplates.dev/blog/wild-life-workshop?id=14&media=&description='><BsPinterest /></a>

              <div className='mt-2'>
                <p className='f-18'>© Businex 2023 All Right Reserved.</p>
              </div>

            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Navbar
