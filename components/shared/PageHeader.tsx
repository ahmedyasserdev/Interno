import React from 'react'

const PageHeader = ({title , image , subTitle} : PageHeaderProps) => {
  return (
    <section  className='w-100 position-relative ' style = {{backgroundImage : `url(${image})` , backgroundSize :  "cover" , backgroundPosition : "center" , backgroundRepeat : "no-repeat"  , height : "356px" }} >

        <div className="flex-center flex-column gap_1 bg-white   text-center" style = {{  position : "absolute"  , bottom : "0" , left : "50%" , transform : "translateX(-50%)"  , padding: "4.1rem 15.2rem" , borderRadius: "37px 37px 0px 0px;" }} >

          <h1 className="text-dark fw-bold display-2  text-capitalize "
            style = {{textWrap : "balance"}}
          >
          {title}
          </h1>

        <p className='text-2 fw-medium  text-dark' >{subTitle}</p>

        </div>




    </section>
  )
}

export default PageHeader



// /* About Us */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// 
// gap: 10px;

// position: absolute;
// width: 503px;
// height: 178px;
// left: 708px;
// top: 317px;

// background: #FFFFFF;
// 
