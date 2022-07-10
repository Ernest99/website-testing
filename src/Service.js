import React from 'react'
import ScrollReveal from 'scrollreveal'

const Service = () => {
    ScrollReveal().reveal('.headline',{
      origin: "top",
      duration: 2000,
      reset: true
    });
  return (
    <div>
        <div className="service">
    <h1 className='headline'>What Service you will<br></br>
    Get from me!</h1>
<div className="serviceContent">
    <div className="box">

    </div>
</div>
        </div>
    </div>
  )
}

export default Service