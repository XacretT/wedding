import React from 'react'
import Link from 'gatsby-link'
import backgroundimg from './img14.jpg'
import usimg from './img15.jpg'

const WHomeSlider = () => (

<div>
  {/* <section className="g-bg-cover g-flex-centered g-bg-pos-relative g-bg-img-hero g-py-150 g-bg-black-opacity-0_7--after" style={{backgroundImage: `url(${backgroundimg})`, height: 'calc(100vh)'}} data-calc-target="#js-header">
  <div className="container text-left g-z-index-1">
    <div className="u-heading-v4-1 g-brd-7 g-brd-primary py-0 g-pl-30">
    <div className="g-mb-25 fadeInUp u-in-viewport" data-animation="fadeInUp" data-animation-delay={50000} data-animation-duration={1500000} style={{animationDuration: '1500ms'}}>
      <h2 className="invitation h4 d-inline-block  g-color-primary g-font-weight-600 text-uppercase g-pb-5 g-pt-10">Приглашение на свадьбу</h2>
    </div>
    <h3 className=" caligraphic g-color-primary g-font-weight-100 g-font-size-50 g-font-size-130--md fadeInDown u-in-viewport" data-animation="fadeInDown" data-animation-delay={2000000} data-animation-duration={10000} style={{animationDuration: '2500ms'}}>
     Михаила и Ники
    </h3>
    <div className="g-mb-25 fadeInUp u-in-viewport" data-animation="fadeInUp" data-animation-delay={50000} data-animation-duration={1500} style={{animationDuration: '1500ms'}}>
      <h2 className="invitation h4 d-inline-block  g-color-primary g-font-weight-600 text-uppercase ">1 сентября 2018 года</h2>
    </div>
    </div>

 
  </div>
  </section> */}

<section id="home" className="g-bg-img-hero g-pos-rel u-bg-overlay g-bg-black-opacity-0_7--after g-pt-150" style={{backgroundImage: `url(${backgroundimg})`}}>
  <div className="container u-bg-overlay__inner g-color-white g-mb-60">

  <div className="container text-left g-z-index-1">
    <div className="u-heading-v4-1 g-brd-7 g-brd-primary py-0 g-pl-30">
    <div className="g-mb-25 fadeInUp u-in-viewport" data-animation="fadeInUp" data-animation-delay={50000} data-animation-duration={1500000} style={{animationDuration: '1500ms'}}>
      <h2 className="invitation h4 d-inline-block  g-color-primary g-font-weight-600 text-uppercase g-pb-5 g-pt-10">Киселевы</h2>
    </div>
    <h3 className=" caligraphic g-color-primary g-font-weight-100 g-font-size-50 g-font-size-130--md fadeInDown u-in-viewport" data-animation="fadeInDown" data-animation-delay={2000000} data-animation-duration={10000} style={{animationDuration: '2500ms'}}>
     Михаил и Ника
    </h3>
    <div className="g-mb-25 fadeInUp u-in-viewport" data-animation="fadeInUp" data-animation-delay={50000} data-animation-duration={1500} style={{animationDuration: '1500ms'}}>
      <h2 className="invitation h4 d-inline-block  g-color-primary g-font-weight-600 text-uppercase "></h2>
    </div>
    </div>
    {/* <div data-animation="fadeInUp" data-animation-delay={1100} data-animation-duration={1500} style={{animationDuration: '1500ms'}} className="fadeInUp u-in-viewport">
      <a className="btn btn-lg u-btn-outline-black g-font-weight-600 g-font-size-13 text-uppercase g-rounded-50 mx-2 g-px-25 g-py-15 g-mb-20" href="#!">Discover More</a>
      <a className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-13 text-uppercase g-rounded-50 mx-2 g-px-25 g-py-15 g-mb-20" href="#!">Purchase Now</a>
</div> */}
 
  </div>
  </div>
  <div className="container u-bg-overlay__inner g-bottom-minus-70 px-0">
    <div className="row u-shadow-v23 g-theme-bg-blue-dark-v2 mx-0">
      <div className="col-md-6 px-0">
        <div className="js-carousel text-center u-carousel-v5 g-overflow-hidden h-100 g-max-height-50vh slick-initialized slick-slider" data-infinite="true" data-arrows-classes="u-arrow-v1 g-absolute-centered--y g-width-40 g-height-40 g-font-size-20 g-color-white g-color-primary--hover g-bg-primary g-bg-white--hover g-transition-0_2 g-transition--ease-in" data-arrow-left-classes="fa fa-angle-left g-left-0" data-arrow-right-classes="fa fa-angle-right g-right-0">
        <img className="h-100 w-100 u-shadow-v21 rounded g-brd-around--md g-brd-10 g-brd-primary rounded" src={usimg} alt="Iamge Description" />
        </div>
      </div>
      <div className="col-md-6 d-flex g-min-height-50vh g-theme-color-gray-dark-v1 g-px-50 g-py-80 g-py-50--md g-py-20--lg">
        <div className="align-self-center w-100">
        <h2 className="text-uppercase u-heading-v2__title g-line-height-1 g-font-weight-100 g-font-size-30 g-font-size-90--md g-mb-0 g-color-primary caligraphic">Семья</h2>
    <p className="mb-0 g-font-size-25 g-color-gray-light-v3 lead invitation">это компас, который ведет нас, она является источником вдохновения для достижения больших высот инашего комфорта, когда мы иногда колеблемся </p>
    <footer class="blockquote-footer g-color-white">-    
    <cite title="Source Title">   Брэд Генри</cite>
    </footer>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
)

export default WHomeSlider
