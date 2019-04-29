import React from 'react'
import Link from 'gatsby-link'
import logo from "./logo-1.png";

const Header = () => (
<header id="js-header" className="u-header u-header--sticky-top u-header--change-appearance" data-header-fix-moment={100}>
  <div className="u-header__section g-transition-0_3 g-py-12" data-header-fix-moment-exclude="g-py-12" data-header-fix-moment-classes="g-theme-bg-black-v1-opacity-0_8 g-py-7">
    <nav className="navbar navbar-expand-lg g-py-0">
      <div className="container g-pos-rel">
        {/* Logo */}
        <a href="#!" className="js-go-to navbar-brand u-header__logo" data-type="static" style={{display: 'inline-block'}}>
          <img className="u-header__logo-img u-header__logo-img--main g-width-130" src="assets/img/logo.png" alt="Image description" />
        </a>
        {/* End Logo */}
        {/* Navigation */}
        <div className="collapse navbar-collapse align-items-center flex-sm-row" id="navBar">
          <ul id="js-scroll-nav" className="navbar-nav text-uppercase g-font-weight-700 g-font-size-11 g-pt-20 g-pt-0--lg ml-auto">
            <li className="nav-item g-mr-15--lg g-mb-7 g-mb-0--lg active">
              <a href="#ourTours" className="nav-link p-0">Our tours <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#popularTours" className="nav-link p-0">Popular tours</a>
            </li>
            <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#subscribe" className="nav-link p-0">Subscribe</a>
            </li>
            <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#purposes" className="nav-link p-0">Purposes</a>
            </li>
            <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#services" className="nav-link p-0">Services</a>
            </li>
            <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#gallery" className="nav-link p-0">Gallery</a>
            </li>
            <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#testimonials" className="nav-link p-0">Testimonials</a>
            </li>
            <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
              <a href="#contact" className="nav-link p-0">Contact</a>
            </li>
          </ul>
        </div>
        {/* End Navigation */}
        {/* Responsive Toggle Button */}
        <button className="navbar-toggler btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-20 g-right-0" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
          <span className="hamburger hamburger--slider">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </span>
        </button>
        {/* End Responsive Toggle Button */}
      </div><header id="js-header" className="u-header u-header--sticky-top u-header--change-appearance" data-header-fix-moment={600}>
        <div className="u-header__section g-bg-gray-dark-v1 g-transition-0_3 g-py-16 g-py-10--md" data-header-fix-moment-classes="u-shadow-v27">
          <nav className="navbar navbar-expand-lg p-0 g-px-15">
            <div className="container g-pos-rel">
              {/* Logo */}
              <a href="#!" className="js-go-to navbar-brand u-header__logo" data-type="static" style={{display: 'inline-block'}}>
                <img className="u-header__logo-img u-header__logo-img--main g-width-150" src="assets/img/logo.png" alt="Image Description" />
              </a>
              {/* End Logo */}
              {/* Navigation */}
              <div className="collapse navbar-collapse align-items-center flex-sm-row" id="navBar">
                <ul id="js-scroll-nav" className="navbar-nav text-uppercase g-font-weight-700 g-font-size-11 g-pt-20 g-pt-0--lg ml-auto">
                  <li className="nav-item g-mr-15--lg g-mb-7 g-mb-0--lg active">
                    <a href="#home" className="nav-link p-0">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                    <a href="#musicAlbums" className="nav-link p-0">Music albums</a>
                  </li>
                  <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                    <a href="#events" className="nav-link p-0">Events</a>
                  </li>
                  <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                    <a href="#tours" className="nav-link p-0">Tours</a>
                  </li>
                  <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                    <a href="#videos" className="nav-link p-0">Videos</a>
                  </li>
                  <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                    <a href="#gallery" className="nav-link p-0">Gallery</a>
                  </li>
                  <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                    <a href="#twitterFeeds" className="nav-link p-0">Twitter feeds</a>
                  </li>
                  <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                    <a href="#musicList" className="nav-link p-0">Music list</a>
                  </li>
                  <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                    <a href="#blog" className="nav-link p-0">Blog</a>
                  </li>
                  <li className="nav-item g-ml-15--lg">
                    <a href="#contact" className="nav-link p-0">Contact</a>
                  </li>
                </ul>
              </div>
              {/* End Navigation */}
              {/* Responsive Toggle Button */}
              <button className="navbar-toggler btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-15 g-right-0" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                <span className="hamburger hamburger--slider">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </span>
              </button>
              {/* End Responsive Toggle Button */}
            </div>
          </nav>
        </div>
      </header>
    </nav>
  </div>
</header>


)

export default Header
