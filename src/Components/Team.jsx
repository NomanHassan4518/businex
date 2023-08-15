import React from 'react';

import { } from 'swiper/modules';
import FunFact from './FunFact';
import ExtraLinks from './ExtraLinks';
import AutoPlaySlider from './AutoPlaySlider';

const Team = () => {

    const team = [
        {
            img: "https://businex.jamstacktemplates.dev/static/media/01.a0c47281.jpg",
            name: "Lucy Farnando",
            position: "CEO & Founder",
        },

        {
            img: "https://businex.jamstacktemplates.dev/static/media/02.4817d3a8.jpg",
            name: "James Anderson",
            position: "HR & Admin",
        },

        {

            img: "https://businex.jamstacktemplates.dev/static/media/03.22822e24.jpg",
            name: "Thomas Nancy",
            position: "Software Engineer",
        },

        {
            img: "https://businex.jamstacktemplates.dev/static/media/04.415c2b93.jpg",
            name: "Nail Mathue",
            position: "Creative Designer",
        },

        {

            img: "https://businex.jamstacktemplates.dev/static/media/05.4b7287aa.jpg",
            name: "Jeff Bazos",
            position: "UI/UX Designer",
        },

        {
            img: "https://businex.jamstacktemplates.dev/static/media/06.299eaec1.jpg",
            name: "Bernard Arnault",
            position: "Web Designer",
        },

        {
            img: "https://businex.jamstacktemplates.dev/static/media/01.a0c47281.jpg",
            name: "Lucy Farnando",
            position: "CEO & Founder",
        },

        {
            img: "https://businex.jamstacktemplates.dev/static/media/02.4817d3a8.jpg",
            name: "James Anderson",
            position: "HR & Admin",
        },

    ]


    
  
    return (
        <>
            <div className="main-team">
                <div className="main-team-items">
                    <div className="main-content pt-5 text-white d-flex flex-column align-items-center justify-content-center ">
                        <h1>KNOW ABOUT BUSINEX THE ULTIMATE TEAM</h1>
                        <p>Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.</p>
                    </div>
                </div>
            </div>


            <div className="about sm-top">
                <div className="container">
                    <div className="row  align-item-lg-center">
                        <div className="col-md-6 col-lg-6 ">
                            <div className="about-content1 " >
                                <h6>Our Team</h6>
                                <h2>Meet Our Expert Member</h2>
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

            <div className="main-team1 sm-top">
             
         <div className="teamgrid">
         <div className="container">
                <div className="row">
                {
                    team.map((a)=>(
                        <div className="col-md-6 col-lg-3">
                        <a href='/'>
                            <div className="box">
                                <div className="imgteaam">
                                    <img src={a.img} alt="" />
                                </div>
                                <h4 className='mt-2'>{a.name}</h4>
                                <p className='my-2 mb-5'>{a.position}</p>
                            </div>
                        </a>
                    </div>
                    ))
                }
                </div>
             </div>
         </div>
            </div>
<AutoPlaySlider/>

<FunFact/>

     <ExtraLinks/>
        </>
    )
}

export default Team
