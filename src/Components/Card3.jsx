import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Card3 = () => {



    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };


    const array = [



        {
            id: "1",
            img: "https://businex.jamstacktemplates.dev/static/media/14.3980f02f.jpg",
            work: "New Business Strategy",
            desc: "Habitat loss, climate change, poaching, and pollution paint a bleaked climate changed, poaching picture for threatened",
            name: "By: KB Arifa",
            date: "Feb 01, 2020",

        },

        {
            img: "https://businex.jamstacktemplates.dev/static/media/13.b525cccb.jpg",
            work: "Weekend trip",
            desc: "Treat yourself to a night re-living the golden age of the railway with a stay at The Old Railway Station in Petworth, West Sussex.",
            name: "By: Aslam Hasib",
            date: "Feb 13, 2020",
        },

        {
            id: "2",
            img: "https://businex.jamstacktemplates.dev/static/media/12.69488396.jpg",
            work: "Discovering Paris",
            desc: "The most important enjoy your lif thing is to enjoy your life - to be happy - it's enjoy your lif all that matters.",
            name: "By: Kajal Akter",
            date: "Feb 12, 2020",
        },


        {
            img: "https://businex.jamstacktemplates.dev/static/media/11.3e5ebcf8.jpg",
            work: "Flower fiesta",
            desc: "From the enclosure wall of the cemetery you can enjoy a distant view to the west into the Pustertal",
            name: "By: Hasan Al Mubarak",
            date: "Feb 11, 2020",
        },

        {
            id: "3",
            img: "https://businex.jamstacktemplates.dev/static/media/10.2a28da5d.jpg",
            work: "Mind power the ultimate success",
            desc: "We have great crfasdfeative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
            name: "By: Tasnim Akter",
            date: "Feb 10, 2020",
        },

        {
            img: "https://businex.jamstacktemplates.dev/static/media/09.deb21201.jpg",
            work: "Brunch at Terrine",
            desc: "The opportunity to innovate is something enjoy your lif most of us want more of in our daily work lives.",
            name: "By: Uzzal Hossain",
            date: "Feb 09, 2020",
        },




        {
            id: "4",
            img: "https://businex.jamstacktemplates.dev/static/media/08.3f7576c5.jpg",
            work: "Wonderful life workshop",
            desc: "I carry my years without submitting to the regimen of time and its chronology of dates and seasons.",
            name: "By: Rabeya Kathun",
            date: "Feb 08, 2020",
        },

        {
            img: "https://businex.jamstacktemplates.dev/static/media/07.8f1bc4ba.jpg",
            work: "Good morning Developer",
            desc: "Objectively streamline magnetic leadership skills vis-a-vis an expanded array of paradigms appropriately incentivize adaptive.",
            name: "By: Yeasin Chowdhury",
            date: "Feb 07, 2020",
        },

        {
            id: "5",
            img: "https://businex.jamstacktemplates.dev/static/media/06.a2a7d1aa.jpg",
            work: "Daily reason to be happy",
            desc: "Happiness is the universal feeling we all aspire to experience more of, yet, we can be an angry, moody",
            name: "By: Hasna Alex",
            date: "Feb 06, 2020",
        },




        {
            img: "https://businex.jamstacktemplates.dev/static/media/05.ac5279a7.jpg",
            work: "Become who you say you",
            desc: "Treat yourself to a night relive laden age of the railway Petworth with stay at The Old Railway Station in West Sussex",
            name: "By: John Smith",
            date: "Feb 05, 2020",
        },

        {
            id: "6",
            img: "https://businex.jamstacktemplates.dev/static/media/04.bd0476f2.jpg",
            work: "When the morning dawns",
            desc: "If I have a chance to whisper the best advice to a baby and he’ll remember it for the rest of his life is this",
            name: "By: Tunir Ma",
            date: "Feb 04, 2020",
        },

        {
            img: "https://businex.jamstacktemplates.dev/static/media/03.70ccdd06.jpg",
            work: "Corporate Conference 2019",
            desc: "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
            name: "By: Raju Ahammad",
            date: "Feb 03, 2020",
        },





        {
            id: "7",
            img: "https://businex.jamstacktemplates.dev/static/media/13.b525cccb.jpg",
            work: "Weekend trip",
            desc: "Treat yourself to a night re-living the golden age of the railway with a stay at The Old Railway Station in Petworth, West Sussex.",
            name: "By: Aslam Hasib",
            date: "Feb 13, 2020",
        },

        {
            img: "https://businex.jamstacktemplates.dev/static/media/14.3980f02f.jpg",
            work: "Wild Life Workshop",
            desc: "Habitat loss, climate change, poaching, and pollution paint a bleaked climate changed, poaching picture for threatened",
            name: "By: KB Arifa",
            date: "Feb 14, 2020",
        },





    ]
    const slide1 = array.slice(0, 6)
    const slide2 = array.slice(6, 12)
    const slide3 = array.slice(12, 14)


    return (
        <>
            <div className="col-lg-9" id='cards'>
                <div className="container">
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper swiper6"
                    >


                        <SwiperSlide>
                            {
                                slide1.map((a) => (
                                    <div className="container">
                                        <div className="row cards">

                                            <div className="col-md-12 my-4">
                                                <a href='/blogdetails' style={{ textDecoration: "none", color: "black" }}>
                                                    <div className="blogBoxes d-flex">
                                                   <div className="leftimg">
                                                   <img src={a.img} alt="" />
                                                   </div>
                                                        <div className="lefttext mx-4">
                                                        <h4 className='mt-3 mb-3 mx-3'>{a.work}</h4>
                                                        <p className='mx-3'>{a.desc}</p>
                                                        <div className="mx-2 d-flex justify-content-between ">
                                                            <p>{a.name}</p>
                                                            <p>{a.date}</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>


                                        </div>
                                    </div>

                                ))
                            }

                        </SwiperSlide>


                        <SwiperSlide>
                            {
                                slide2.map((a) => (
                                    <div className="container">
                                        <div className="row">

                                        <div className="col-md-12 my-4">
                                                <a href='/blogdetails' style={{ textDecoration: "none", color: "black" }}>
                                                    <div className="blogBoxes d-flex">
                                                   <div className="leftimg">
                                                   <img src={a.img} alt="" />
                                                   </div>
                                                        <div className="lefttext mx-4">
                                                        <h4 className='mt-3 mb-3 mx-3'>{a.work}</h4>
                                                        <p className='mx-3'>{a.desc}</p>
                                                        <div className="mx-2 d-flex justify-content-between ">
                                                            <p>{a.name}</p>
                                                            <p>{a.date}</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>



                                        </div>
                                    </div>

                                ))
                            }
                        </SwiperSlide>


                        <SwiperSlide className='swiper5'>
                            {
                                slide3.map((a) => (
                                    <div className="container">
                                        <div className="row">

                                        <div className="col-md-12 my-4">
                                                <a href='/blogdetails' style={{ textDecoration: "none", color: "black" }}>
                                                    <div className="blogBoxes d-flex">
                                                   <div className="leftimg">
                                                   <img src={a.img} alt="" />
                                                   </div>
                                                        <div className="lefttext mx-4">
                                                        <h4 className='mt-3 mb-3'>{a.work}</h4>
                                                        <p className='mx-3'>{a.desc}</p>
                                                        <div className="mx-2 d-flex justify-content-between ">
                                                            <p>{a.name}</p>
                                                            <p>{a.date}</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>




                                        </div>
                                    </div>

                                ))
                            }
                        </SwiperSlide>


                    </Swiper>
                </div>

            </div>
        </>
    )
}

export default Card3
