import React from 'react'
import Link from 'gatsby-link'
import img1 from './img1.jpg'

import { withPrefix } from 'gatsby-link'


const WBlockHotel= () => (
<section className="g-bg-gray-dark-v1 g-py-100">
<div className="container g-pb-100">
  {/* Image, Text Block */}
  <div className="row d-flex align-items-lg-center flex-wrap g-mb-60 g-mb-0--lg">
    <div className="col-md-6 col-lg-7">
      <img className="img-fluid rounded" src={img1} alt="Отель" />
    </div>
    <div className="col-md-6 col-lg-5">
      <div className="g-mt-0--md ">
        <div className="g-mb-20">
          <h2 className="g-color-primary poiret-main g-font-weight-600 g-font-size-25 g-font-size-35--lg g-line-height-1_2 mb-4 text-uppercase">Сборы Санчеза
          </h2>
          <p className="g-font-size-25 g-color-gray-light-v3 poiret-main">Чуви, постарайся просто не проспать - ты свидетель<br />Пиджак одевается сверху, колоши снизу<br />Не засматривайся на самолеты!<br /><br />PS: мне лень приклеивать замок на коробку с кольцами</p>
        </div>
        <a className="btn u-btn-primary g-brd-2 g-brd-white g-font-size-20 g-rounded-50 g-pl-20 g-pr-15 g-py-9 poiret-main" target="_blank" href="https://www.google.com/maps/place/%D0%A1%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%8B%D0%B9+%D0%BF%D1%80-%D0%B4,+4,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+127282/@55.8935823,37.6556404,17z/data=!3m1!4b1!4m5!3m4!1s0x46b53129d542545d:0xe21ebb29478947b0!8m2!3d55.8935823!4d37.6578291">
          На карте
          <span className="align-middle u-icon-v3 g-width-16 g-height-16 g-color-black g-bg-white g-font-size-11 rounded-circle ml-3">
            <i className="fa fa-angle-right" />
          </span>
        </a>
      </div>
    </div>

  </div>
  {/* End Image, Text Block */}
</div>
<div className="u-divider u-divider-solid u-divider-center g-brd-primary w-75 mx-auto ">
  <i className="fa fa-angle-down u-divider__icon g-bg-primary g-color-black rounded-circle"></i>
  </div>

</section>


)

export default WBlockHotel