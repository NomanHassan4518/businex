import React from 'react'

const FunFact = () => {
  return (
    <div className="fun-fact-area parallax sm-top" style={{backgroundImage:`url("https://businex.jamstacktemplates.dev/static/media/fun-fact-bg.0246ddce.jpg")` ,   display:"flex" , alignItems:"center"}}>
    <div className="container">
      <div className="row">

        <div className="col-3 col-md-3 text-center">
          <div className="counter-item">
            <h2 className="counter-number">
              <div>
                <span className='counter'>2654</span>
              
              </div>
            </h2>
            <h6 className="counter-txt ">Happy Clients</h6>
          </div>
        </div>
        

        <div className="col-3 col-md-3 text-center">
          <div className="counter-item">
            <h2 className="counter-number">
              <div>
                <span className='counter'>1520</span>
                <span className="sr-only">+</span>
              </div>
            </h2>
            <h6 className="counter-txt ">Project Done</h6>
          </div>
        </div>

        <div className="col-3 col-md-3 text-center">
          <div className="counter-item">
            <h2 className="counter-number">
              <div>
                <span className='counter' >120</span>
                <span className="sr-only">+</span>
              </div>
            </h2>
            <h6 className="counter-txt ">Awards Win</h6>
          </div>
        </div>

        <div className="col-3 col-md-3 text-center">
          <div className="counter-item">
            <h2 className="counter-number">
              <div>
                <span className='counter'>3580</span>
                <span className="sr-only">+</span>
              </div>
            </h2>
            <h6 className="counter-txt ">Cups Coffee</h6>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default FunFact
