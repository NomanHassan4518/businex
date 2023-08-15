import React from 'react'
import ExtraLinks from './ExtraLinks'
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-items mb-5 ">
          <div className="row mt-5">
            <div className="col-lg-8 mt-5">
              <div className="contact-form">
                <h1 className='my-4 mx-4'>Send us a Message</h1>
                <form action="" className='my-5'>
                  <div className="d-flex my-4  mx-4">
                    <input type="text" name="" id="" placeholder='Fitst Name*' />
                    <input className='con' type="text" name="" id="" placeholder='Last Name*' />
                  </div>
                  <div className="d-flex my-4 mx-4">
                    <input type="email" name='' id='' placeholder='Email Address' />
                    <input className='con' type="number" name='' id='' placeholder='Phone No' />
                  </div>
                  <textarea className='my-3 p-3 mx-4' name="" id="" cols="85" rows="6" placeholder='Write Your Message*'></textarea>

                  <a className='mt-3 mx-4 btn-outline' href='/'>Send Message</a>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-info">
                <div className="contact-inform">
                  <h3>Contact Info</h3>
                  <address>
                    <span>
                      2005 Stokes Isle Apartment
                      <br />
                      896, Washington 10010, USA
                      <br />
                      https://example.com
                      <br />
                      (+68) 120034509
                    </span>
                  </address>

                  <div className="social-icons1 d-flex  my-4">
                    <a className='facebook1' href='https://www.facebook.com/sharer/sharer.php?u=https://businex.jamstacktemplates.dev/blog/wild-life-workshop?id=14'><BiLogoFacebook /></a>

                    <a className='twitter1' href='https://twitter.com/home?status=https://businex.jamstacktemplates.dev/blog/wild-life-workshop?id=14'><AiOutlineTwitter /></a>

                    <a className='linkedin' href='https://linkedin.com/hasthemes'><BiLogoLinkedin /></a>

                    <a className='pinterest1' href='https://pinterest.com/pin/create/button/?url=https://businex.jamstacktemplates.dev/blog/wild-life-workshop?id=14&media=&description='><BsPinterest /></a>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ExtraLinks />
      </div>
    </div>
  )
}

export default Contact
