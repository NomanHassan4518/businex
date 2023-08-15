import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Card2 = () => {
    

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

            img1: "https://businex.jamstacktemplates.dev/static/media/13.b525cccb.jpg",
            work1: "Weekend trip",
            desc1: "Treat yourself to a night re-living the golden age of the railway with a stay at The Old Railway Station in Petworth, West Sussex.",
            name1: "By: Aslam Hasib",
            date1: "Feb 13, 2020",


            id2: "2",
            img2: "https://businex.jamstacktemplates.dev/static/media/12.69488396.jpg",
            work2: "Discovering Paris",
            desc2: "The most important enjoy your lif thing is to enjoy your life - to be happy - it's enjoy your lif all that matters.",
            name2: "By: Kajal Akter",
            date2: "Feb 12, 2020",


        },


        {
           

            img: "https://businex.jamstacktemplates.dev/static/media/11.3e5ebcf8.jpg",
            work: "Flower fiesta",
            desc: "From the enclosure wall of the cemetery you can enjoy a distant view to the west into the Pustertal",
            name: "By: Hasan Al Mubarak",
            date: "Feb 11, 2020",

            id1: "3",
            img1: "https://businex.jamstacktemplates.dev/static/media/10.2a28da5d.jpg",
            work1: "Mind power the ultimate success",
            desc1: "We have great crfasdfeative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
            name1: "By: Tasnim Akter",
            date1: "Feb 10, 2020",

            img2: "https://businex.jamstacktemplates.dev/static/media/09.deb21201.jpg",
            work2: "Brunch at Terrine",
            desc2: "The opportunity to innovate is something enjoy your lif most of us want more of in our daily work lives.",
            name2: "By: Uzzal Hossain",
            date2: "Feb 09, 2020",

           
        },
        {
            id: "4",
            img: "https://businex.jamstacktemplates.dev/static/media/08.3f7576c5.jpg",
            work: "Wonderful life workshop",
            desc: "I carry my years without submitting to the regimen of time and its chronology of dates and seasons.",
            name: "By: Rabeya Kathun",
            date: "Feb 08, 2020",

            img1: "https://businex.jamstacktemplates.dev/static/media/07.8f1bc4ba.jpg",
            work1: "Good morning Developer",
            desc1: "Objectively streamline magnetic leadership skills vis-a-vis an expanded array of paradigms appropriately incentivize adaptive.",
            name1: "By: Yeasin Chowdhury",
            date1: "Feb 07, 2020",

            id2: "5",
            img2: "https://businex.jamstacktemplates.dev/static/media/06.a2a7d1aa.jpg",
            work2: "Daily reason to be happy",
            desc2: "Happiness is the universal feeling we all aspire to experience more of, yet, we can be an angry, moody",
            name2: "By: Hasna Alex",
            date2: "Feb 06, 2020",

        },

        {
          
            img: "https://businex.jamstacktemplates.dev/static/media/05.ac5279a7.jpg",
            work: "Become who you say you",
            desc: "Treat yourself to a night relive laden age of the railway Petworth with stay at The Old Railway Station in West Sussex",
            name: "By: John Smith",
            date: "Feb 05, 2020",

            id1: "6",
            img1: "https://businex.jamstacktemplates.dev/static/media/04.bd0476f2.jpg",
            work1: "When the morning dawns",
            desc1: "If I have a chance to whisper the best advice to a baby and he’ll remember it for the rest of his life is this",
            name1: "By: Tunir Ma",
            date1: "Feb 04, 2020",

            img2: "https://businex.jamstacktemplates.dev/static/media/03.70ccdd06.jpg",
            work2: "Corporate Conference 2019",
            desc2: "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
            name2: "By: Raju Ahammad",
            date2: "Feb 03, 2020",
        },

      

        {
            id: "7",
            img: "https://businex.jamstacktemplates.dev/static/media/13.b525cccb.jpg",
            work: "Weekend trip",
            desc: "Treat yourself to a night re-living the golden age of the railway with a stay at The Old Railway Station in Petworth, West Sussex.",
            name: "By: Aslam Hasib",
            date: "Feb 13, 2020",

            img1: "https://businex.jamstacktemplates.dev/static/media/14.3980f02f.jpg",
            work1: "Wild Life Workshop",
            desc1: "Habitat loss, climate change, poaching, and pollution paint a bleaked climate changed, poaching picture for threatened",
            name1: "By: KB Arifa",
            date1: "Feb 14, 2020",
        }




    ]
    const slide1 = array.slice(0, 2)
    const slide2 = array.slice(2, 4)
    const slide3 = array.slice(4, 7)
    

  return (
 <>
   <div className="col-lg-12" id='cards'>
                <div className="container">
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper swiper5"
                    >


                        <SwiperSlide>
                            {
                                slide1.map((a) => (
                                    <div className="container">
                                        <div className="row cards">

                                            <div className="col-md-4 my-2">
                                                <a href='/blogdetails' style={{ textDecoration: "none", color: "black" }}>
                                                    <div className="blogBoxes">
                                                        <img src={a.img} alt="" style={{ width: "100%" }} />
                                                        <h4 className='mt-3 mb-3 mx-3'>{a.work}</h4>
                                                        <p className='mx-3'>{a.desc}</p>
                                                        <div className="mx-5 d-flex justify-content-between ">
                                                            <p>{a.name}</p>
                                                            <p>{a.date}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>


                                            <div className="col-md-4 my-2">
                                                <a href='/blogdetails' style={{ textDecoration: "none", color: "black" }}>
                                                    <div className="blogBoxes">
                                                        <img src={a.img1} alt="" style={{ width: "100%" }} />
                                                        <h4 className='mt-3 mb-3 mx-3'>{a.work1}</h4>
                                                        <p className='mx-3'>{a.desc}</p>
                                                        <div className="mx-5 d-flex justify-content-between ">
                                                            <p>{a.name1}</p>
                                                            <p>{a.date1}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>


                                            <div className="col-md-4 my-2">
                                                <a href='/blogdetails' style={{ textDecoration: "none", color: "black" }}>
                                                    <div className="blogBoxes">
                                                        <img src={a.img2} alt="" style={{ width: "100%" }} />
                                                        <h4 className='mt-3 mb-3 mx-3'>{a.work2}</h4>
                                                        <p className='mx-3'>{a.desc}</p>
                                                        <div className="mx-5 d-flex justify-content-between ">
                                                            <p>{a.name2}</p>
                                                            <p>{a.date2}</p>
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

                                            <div className="col-md-4 my-2">
                                                <a href='/blogdetails' style={{ textDecoration: "none", color: "black" }}>
                                                    <div className="blogBoxes">
                                                        <img src={a.img} alt="" style={{ width: "100%" }} />
                                                        <h4 className='mt-3 mb-3 mx-3'>{a.work}</h4>
                                                        <p className='mx-3'>{a.desc}</p>
                                                        <div className="mx-5 d-flex justify-content-between ">
                                                            <p>{a.name}</p>
                                                            <p>{a.date}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>


                                            <div className="col-md-4 my-2">
                                                <a href='/blogdetails' style={{ textDecoration: "none", color: "black" }}>
                                                    <div className="blogBoxes">
                                                        <img src={a.img1} alt="" style={{ width: "100%" }} />
                                                        <h4 className='mt-3 mb-3 mx-3'>{a.work1}</h4>
                                                        <p className='mx-3'>{a.desc}</p>
                                                        <div className="mx-5 d-flex justify-content-between ">
                                                            <p>{a.name1}</p>
                                                            <p>{a.date1}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>






                                            <div className="col-md-4 my-2">
                                                <a href='/blogdetails' style={{ textDecoration: "none", color: "black" }}>
                                                    <div className="blogBoxes">
                                                        <img src={a.img2} alt="" style={{ width: "100%" }} />
                                                        <h4 className='mt-3 mb-3 mx-3'>{a.work2}</h4>
                                                        <p className='mx-3'>{a.desc}</p>
                                                        <div className="mx-5 d-flex justify-content-between ">
                                                            <p>{a.name2}</p>
                                                            <p>{a.date2}</p>
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

                                            <div className="col-md-4 my-2">
                                                <a href='/blogdetails' style={{ textDecoration: "none", color: "black" }}>
                                                    <div className="blogBoxes">
                                                        <img src={a.img} alt="" style={{ width: "100%" }} />
                                                        <h4 className='mt-3 mb-3 mx-3'>{a.work}</h4>
                                                        <p className='mx-3'>{a.desc}</p>
                                                        <div className="mx-5 d-flex justify-content-between ">
                                                            <p>{a.name}</p>
                                                            <p>{a.date}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>


                                            <div className="col-md-4 my-2">
                                                <a href='/blogdetails' style={{ textDecoration: "none", color: "black" }}>
                                                    <div className="blogBoxes">
                                                        <img src={a.img1} alt="" style={{ width: "100%" }} />
                                                        <h4 className='mt-3 mb-3 mx-3'>{a.work1}</h4>
                                                        <p className='mx-3'>{a.desc}</p>
                                                        <div className="mx-5 d-flex justify-content-between ">
                                                            <p>{a.name1}</p>
                                                            <p>{a.date1}</p>
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

export default Card2
