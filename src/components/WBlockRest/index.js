import React from 'react'
import Link from 'gatsby-link'
import img1 from './img1.jpg'

import { withPrefix } from 'gatsby-link'


const WBlockRest= () => (
<section className="g-bg-gray-dark-v1 g-py-100">
<div className="container g-pb-100">
  {/* Image, Text Block */}
  <div className="row d-flex align-items-lg-center flex-wrap g-mb-60 g-mb-0--lg">

    <div className="col-md-6 col-lg-6">
      <div className="g-mt-0--md ">
        <div className="g-mb-20">
          <h2 className="g-color-primary poiret-main g-font-weight-600 g-font-size-25 g-font-size-35--lg g-line-height-1_2 mb-4 text-uppercase">Свадебный вечер
          </h2>
          <p className="g-font-size-25 g-color-gray-light-v3 poiret-main">К 16:00 - 16:30 ждем Вас в ресторане "Carne Vino" <br />по адр. ул. Кузнецкий Мост, 21/5. <br />Вас ожидают особая атмосфера, вкусная кухня, бесконечное веселье и отличный вид на площадь Воровского.</p>
        </div>
        <a className="btn u-btn-primary g-brd-2 g-brd-white g-font-size-20 g-rounded-50 g-pl-20 g-pr-15 g-py-9 poiret-main" target="_blank" href="https://www.google.com/maps/place/Carne+Vino/@55.761897,37.6260268,18z/data=!3m1!4b1!4m5!3m4!1s0x46b54a5d03f93b89:0x6db23d31edb57ae3!8m2!3d55.761896!4d37.6267381">
          На карте
          <span className="align-middle u-icon-v3 g-width-16 g-height-16 g-color-black g-bg-white g-font-size-11 rounded-circle ml-3">
            <i className="fa fa-angle-right" />
          </span>
        </a>
      </div>
    </div>

    <div className="col-md-6 col-lg-6 ">
      <img className="img-fluid rounded" src={img1} alt="Ресторан" />
    </div>

  </div>
  {/* End Image, Text Block */}
</div>
<div className="u-divider u-divider-center g-brd-primary w-75 mx-auto ">
  <i className="fa fa-angle-down u-divider__icon g-bg-primary g-color-black rounded-circle"></i>
  </div>

</section>


)

export default WBlockRest