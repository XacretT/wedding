import React from 'react'
import Link from 'gatsby-link'
import WHomeSlider from '../components/WHomeSlider'
import WBlockItrade from '../components/WBlockItrade'
import WBlockZags from '../components/WBlockZags'
import WBlockShip from '../components/WBlockShip'
import WBlockRest from '../components/WBlockRest'
import WBlockCake from '../components/WBlockCake'
import WBlockOgon from '../components/WBlockOgon'
import WBlockHome from '../components/WBlockHome'



const IndexPage = () => (
<div>

  <WHomeSlider />

  <section id="tours" className="g-bg-gray-dark-v1 g-py-100">
  <div className="container text-center g-width-880 ">
    <div className="u-heading-v2-2--bottom g-brd-primary g-mb-30">
      <h2 className="u-heading-v2__title g-line-height-1 g-font-weight-100 g-font-size-30 g-font-size-90--md g-mb-0 g-color-primary caligraphic">Примногопочитаемый милсдарь Санчез!</h2>
    </div>
    <blockquote className="blockquote text-center  g-brd-left-none g-font-size-16 g-pa-40 g-mb-30">
    <p className="mb-0 g-font-size-30 g-color-gray-light-v3 lead invitation">Мы рады пригласить тебя на нашу свадьбу! Жги невероятно! Мы безмерно тебе благодарны, особенно за пироги и чашки на краю столов. Будем ждать тебя на нашем совместном торжестве.</p>
    </ blockquote>

  <div className="u-divider u-divider-center g-brd-primary w-75 mx-auto ">
  <i className="fa fa-angle-down u-divider__icon g-bg-primary g-color-black rounded-circle"></i>
  </div>

  </div>

</section>



  <WBlockItrade />

  <WBlockZags />

  <WBlockShip />

  <WBlockRest />

  <WBlockCake />

  <WBlockOgon />

  <WBlockHome />


</div>
)

export default IndexPage
