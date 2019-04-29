import React from 'react'
import Link from 'gatsby-link'
import backgroundimg from './img14.jpg'


const ProductsSlider = () => (
<section className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall is-touch" data-options="{direction: &quot;fromtop&quot;, animation_duration: 25, direction: &quot;reverse&quot;}">
  {/* Parallax Image */}
  <div className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-size-cover g-bg-pos-top-center g-bg-primary-gradient-opacity-v1--after" style={{height: '140%', backgroundImage: `url(${backgroundimg})`, transform: 'translate3d(0px, -61.1271px, 0px)'}} />
  {/* End Parallax Image */}
  {/* Promo Block Content */}
  <div className="container g-color-white text-center g-pos-rel g-z-index-1 g-pt-150 g-pb-200">
    <h3 className="h2 g-font-weight-300 mb-0">Finding your perfect </h3>
    <h2 className="g-font-weight-700 g-font-size-65 text-uppercase">Growing Solution</h2>
  </div>
  {/* Promo Block Content */}
</section>
)

export default ProductsSlider
