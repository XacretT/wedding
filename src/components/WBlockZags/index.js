import React from 'react'
import Link from 'gatsby-link'
import img1 from './img1.jpg'

import { withPrefix } from 'gatsby-link'


const WBlockZags= () => (
<section className="g-bg-gray-dark-v1 g-py-100">
<div className="container g-pb-100">
  {/* Image, Text Block */}
  <div className="row d-flex align-items-lg-center flex-wrap g-mb-60 g-mb-0--lg">

    <div className="col-md-6 col-lg-6">
      <div className="g-mt-0--md ">
        <div className="g-mb-20">
          <h2 className="g-color-primary poiret-main g-font-weight-600 g-font-size-25 g-font-size-35--lg g-line-height-1_2 mb-4 text-uppercase">Церемония бракосочетания
          </h2>
          <p className="g-font-size-25 g-color-gray-light-v3 poiret-main">В 10:00 запланирована церемония регистрации брака во Дворце бракосочетания "Грибоедовский" <br />по адр. ул. Малый Харитоновский переулок, д.10, стр. 1.</p>
        </div>
        <a className="btn u-btn-primary g-brd-2 g-brd-white g-font-size-20 g-rounded-50 g-pl-20 g-pr-15 g-py-9 poiret-main" target="_blank" href="https://www.google.com/maps/place/%D0%9C%D0%B0%D0%BB%D1%8B%D0%B9+%D0%A5%D0%B0%D1%80%D0%B8%D1%82%D0%BE%D0%BD%D1%8C%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D0%B5%D1%80.,+10,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+101000/@55.7659408,37.6427703,17z/data=!3m1!4b1!4m5!3m4!1s0x46b54a63c41b4c8d:0x743f80fae21618d5!8m2!3d55.7659378!4d37.6449643">
          На карте
          <span className="align-middle u-icon-v3 g-width-16 g-height-16 g-color-black g-bg-white g-font-size-11 rounded-circle ml-3">
            <i className="fa fa-angle-right" />
          </span>
        </a>
      </div>
    </div>

    <div className="col-md-6 col-lg-6 ">
      <img className="img-fluid rounded" src={img1} alt="Загс" />
    </div>

  </div>
  {/* End Image, Text Block */}
</div>
<div className="u-divider u-divider-center g-brd-primary w-75 mx-auto ">
  <i className="fa fa-angle-down u-divider__icon g-bg-primary g-color-black rounded-circle"></i>
  </div>

</section>


)

export default WBlockZags