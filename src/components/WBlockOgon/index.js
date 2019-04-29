import React from 'react'
import Link from 'gatsby-link'
import img1 from './img1.jpg'

import { withPrefix } from 'gatsby-link'


const WBlockOgon = () => (
<section className="g-bg-gray-dark-v1 g-py-100">
<div className="container g-pb-100">
  {/* Image, Text Block */}
  <div className="row d-flex align-items-lg-center flex-wrap g-mb-60 g-mb-0--lg">

    <div className="col-md-6 col-lg-6">
      <div className="g-mt-0--md ">
        <div className="g-mb-20">
          <h2 className="g-color-primary poiret-main g-font-weight-600 g-font-size-25 g-font-size-35--lg g-line-height-1_2 mb-4 text-uppercase">Огонь
          </h2>
          <p className="g-font-size-25 g-color-gray-light-v3 poiret-main">В 22.00 - 22.30 маленькая радость напоследок</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-6 ">
      <img className="img-fluid rounded" src={img1} alt="Огонь" />
    </div>

  </div>
  {/* End Image, Text Block */}
</div>
</section>


)

export default WBlockOgon