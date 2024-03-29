import React from 'react'
import Link from 'gatsby-link'
import img1 from './img1.jpg'

import { withPrefix } from 'gatsby-link'


const WBlockShip= () => (
<section className="g-bg-gray-dark-v1 g-py-100">
<div className="container g-pb-100">
  {/* Image, Text Block */}
  <div className="row d-flex align-items-lg-center flex-wrap g-mb-60 g-mb-0--lg">
    <div className="col-md-6 col-lg-7">
      <img className="img-fluid rounded" src={img1} alt="Круиз" />
    </div>
    <div className="col-md-6 col-lg-5">
      <div className="g-mt-0--md ">
        <div className="g-mb-20">
          <h2 className="g-color-primary poiret-main g-font-weight-600 g-font-size-25 g-font-size-35--lg g-line-height-1_2 mb-4 text-uppercase">Круиз по Москве-реке
          </h2>
          <p className="g-font-size-25 g-color-gray-light-v3 poiret-main">В 13.00 Вас ожидает дневной круиз по Москве-реке от причала "Парк Горького"</p>
        </div>
      </div>
    </div>

  </div>
  {/* End Image, Text Block */}
</div>
<div className="u-divider u-divider-center g-brd-primary w-75 mx-auto ">
  <i className="fa fa-angle-down u-divider__icon g-bg-primary g-color-black rounded-circle"></i>
  </div>

</section>


)

export default WBlockShip