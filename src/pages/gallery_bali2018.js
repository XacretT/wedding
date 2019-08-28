import React from 'react'
import Link from 'gatsby-link'
import WHomeSlider from '../components/WHomeSlider'
import Gallery from '../components/Gal-Bali2018'




const IndexPage = () => (
<div>

  <WHomeSlider />

  <section id="tours" className="g-bg-gray-dark-v1 g-py-100">
  <div className="container text-center g-width-880 ">
    <div className="u-heading-v2-2--bottom g-brd-primary g-mb-30">
      <h2 className="u-heading-v2__title g-line-height-1 g-font-weight-100 g-font-size-30 g-font-size-90--md g-mb-0 g-color-primary caligraphic">Фотогалеря свадебного путешествия</h2>
    </div>

    <div className="u-divider u-divider-solid u-divider-center g-brd-primary w-75 mx-auto ">
  <i className="fa fa-angle-down u-divider__icon g-bg-primary g-color-black rounded-circle"></i>
  </div>

  </div>
</section>

<Gallery />




</div>
)

export default IndexPage
