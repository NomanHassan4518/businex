import React from 'react'

const Service0 = () => {
    const service = [
        {
          img: "https://businex.jamstacktemplates.dev/static/media/01.c0713f94.jpg",
          title: "Creative Ideas",
        },
        {
          img: "https://businex.jamstacktemplates.dev/static/media/02.ddab42a4.jpg",
          title: "Digital Solution",
        },
        {
          img: "https://businex.jamstacktemplates.dev/static/media/03.40e47a88.jpg",
          title: "Brand & Communication",
        },
        {
          img: "https://businex.jamstacktemplates.dev/static/media/04.c4a74383.jpg",
          title: "Creative Strategy",
        },
        {
          img: "https://businex.jamstacktemplates.dev/static/media/05.673f0909.jpg",
          title: "Marketing Policy",
        },
        {
          img: "	https://businex.jamstacktemplates.dev/static/media/06.97be56ef.jpg",
          title: "Campaign & PR",
        },
      ]
  return (
    <div className="service">
    <div className="service-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5 m-auto text-center">
            <div className="sectionTitle">
              <h6>Our Services</h6>
              <h2>We make it simple , providing best solution.</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          {
            service.map((a) => (
              <div className="col-md-4 col-sm-6 ">
                <div className="service-item">
                  <div className="service-img">
                    <img src={a.img} alt="" />
                    <div class="service-content">
                    <div class="service-content-inner">
                      <h5>
                        <a class="stretched-link" href="/" style={{textDecoration:"none" , color:"white"}}>{a.title}</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit consectetur adipisicing elit. Asdipiscing elit. Consectetur adipisicing hastech.
                      </p>
                    </div>
                  </div>
                  </div>

                  <div className="service-title text-center">
                    <h5>{a.title}</h5>
                  </div>

                  
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>


  )
}

export default Service0
