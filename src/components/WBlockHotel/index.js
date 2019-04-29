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
          <h2 className="g-color-primary poiret-main g-font-weight-600 g-font-size-25 g-font-size-35--lg g-line-height-1_2 mb-4 text-uppercase">Сборы детей
          </h2>
          <p className="g-font-size-25 g-color-gray-light-v3 poiret-main">Для тебя отведена самая ответственная часть свадьбы - подготовка детей-балбесов. <br />К 7.00 будем ждать тебя сонные в отеле "Националь" <br />по адр. Ул. Моховая, 15/1, стр. 1.</p>
        </div>
        <a className="btn u-btn-primary g-brd-2 g-brd-white g-font-size-20 g-rounded-50 g-pl-20 g-pr-15 g-py-9 poiret-main" target="_blank" href="https://www.google.com/maps/place/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C/@55.7568181,37.6118342,17z/data=!3m1!4b1!4m7!3m6!1s0x46b54a5aae185f95:0xd7b9ee5041363034!5m1!1s2018-09-06!8m2!3d55.7568151!4d37.6140282">
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
<div className="u-divider  u-divider-center g-brd-primary w-75 mx-auto ">
  <i className="fa fa-angle-down u-divider__icon g-bg-primary g-color-black rounded-circle"></i>
  </div>

</section>


)

export default WBlockHotel