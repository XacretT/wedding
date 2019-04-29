import React from 'react'
import Link from 'gatsby-link'
import WHomeSlider from '../components/WHomeSlider'
import WGallery from '../components/WGallery'




const IndexPage = () => (
<div>

  <WHomeSlider />

  <section id="tours" className="g-bg-gray-dark-v1 g-py-100">
  <div className="container text-center g-width-880 ">
    <div className="u-heading-v2-2--bottom g-brd-primary g-mb-30">
      <h2 className="u-heading-v2__title g-line-height-1 g-font-weight-100 g-font-size-30 g-font-size-90--md g-mb-0 g-color-primary caligraphic">Фотогалеря нашей свадьбы</h2>
    </div>
    <blockquote className="blockquote text-center  g-brd-left-none g-font-size-16 g-pa-40 g-mb-30">
    <p className="mb-0 g-font-size-30 g-color-gray-light-v3 lead invitation">События и фотохроника 1 сентября 2018 года. <br />Хотим напомнить, что ссылки на Ваши приглашения остались прежними и ни куда не будут удаляться; при необходимости, спросить у Ники выдать ссылку заново.</p>
    </ blockquote>

    <div className="u-divider u-divider-solid u-divider-center g-brd-primary w-75 mx-auto ">
  <i className="fa fa-angle-down u-divider__icon g-bg-primary g-color-black rounded-circle"></i>
  </div>

  </div>
</section>

<WGallery />




</div>
)

export default IndexPage
