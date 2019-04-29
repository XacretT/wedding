import React from 'react'
import Link from 'gatsby-link'
import img1 from './img1.jpg'
import backgroundimg from './bg.jpg'

import { withPrefix } from 'gatsby-link'


const WBlockHome= () => (
<div>
<section className="g-bg-cover g-flex-centered g-bg-pos-center g-bg-img-hero g-py-150 g-bg-black-opacity-0_7--after" style={{backgroundImage: `url(${backgroundimg})`, height: 'calc(100vh)'}} data-calc-target="#js-header">
<div className="container text-left g-z-index-1">

      <div className="row align-items-center">
        <div className=" g-mb-30 g-mb-0--lg">
          <h2 className="h1 text-uppercase g-color-white g-mb-30">
            <span className="g-bg-primary-dark-v3 g-px-5 invitation g-font-size-90--md">Пока &amp; Пока</span><br />
          </h2>
          <h3 className="h4 g-color-white">
            <span className="g-bg-black-opacity-0_6 g-px-5 invitation">23:00</span><br />
            <span className="g-bg-black-opacity-0_6 g-px-5 invitation g-font-size-20--md">Благодарим Вас за то, что разделили с нами наше маленькое торжество</span><br />
            <span className="g-bg-black-opacity-0_6 g-px-5 invitation g-font-size-30--md">Мы все отправляемся отдыхать</span>
          </h3>
        </div>
</div>


  </div>
</section>
</div>



)

export default WBlockHome