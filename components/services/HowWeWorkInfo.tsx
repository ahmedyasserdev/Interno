import React from 'react'
import { Image } from 'react-bootstrap'

const HowWeWorkInfo = ({icon , title  , count , desc} : HowWeWorkInfoProps  ) => {
  return (
    <article className='d-flex flex-column   align-items-start gap-4' >
        <div className = "flex-between "
          style = {{width : "85%"}}
        >
          <Image  src = {icon} alt = {title} />
            <p className = "text-white    fw-bold"
              style = {{fontSize : "10rem !important"}}
            >{count}</p>

        </div>


      <div>
      <h2 className="text-4 fw-bold text-dak text-capitalize ">{title}</h2>
    <p className = "w-75" >
 {desc}
    </p>


      </div>






    </article>
  )
}

export default HowWeWorkInfo