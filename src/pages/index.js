import React from 'react'
import Link from 'gatsby-link'
import WHomeSlider from '../components/WHomeSlider'
import WHomeAbout from '../components/WHomeAbout'
import BannerWeddingGallery from '../components/BannerWeddingGallery'
import BannerGalleryBali2018 from '../components/BannerGalleryBali2018'




const IndexPage = () => (
<div>

  <WHomeSlider />
  <WHomeAbout />
  <section className="g-bg-gray-dark-v1 ">
    <div className="container g-pb-100">
      <div className="row align-items-stretch">
        <BannerWeddingGallery />
        <BannerGalleryBali2018 />
      </div>
    </div>
  </section>
</div>
)

export default IndexPage
