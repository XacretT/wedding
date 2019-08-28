import React from 'react'
import Link from 'gatsby-link'
import img1 from './1.jpg'

import { withPrefix } from 'gatsby-link'


const WBlockShip= () => (



  <div className="col-md-6 g-mb-30">
    {/* Article */}
    <article className="h-100 text-center u-block-hover info-v3-2 g-flex-middle g-bg-cover g-bg-size-cover g-bg-black-opacity-0_2--after g-color-white text-uppercase g-py-210 g-px-30" data-bg-img-src={img1}>
      <div className="g-flex-middle-item g-pos-rel g-z-index-2">
        <h3 className="g-font-weight-700 g-letter-spacing-3 g-mb-20">Свадебное
          <br />
          Путешествие
        </h3>
        <em className="d-block g-letter-spacing-3 g-font-weight-300 g-font-style-normal g-mb-40">Бали, 2018 год</em>
        <Link to="/gallery_bali2018" className="btn btn-xxl u-btn-white g-font-weight-600 g-font-size-11 text-uppercase" >посмотреть</Link><br /><br />
      </div>
    </article>
    {/* End Article */}
  </div>







)

export default WBlockShip