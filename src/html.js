import React from "react"
import { withPrefix } from 'gatsby-link'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="Свадьба Михаила и Ники" />
          {this.props.headComponents}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#48b82c" />
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

<meta name="msapplication-TileColor" content="#9f00a7" />
<meta name="theme-color" content="#ffffff" />



          {css}

          <style>
@import url('https://fonts.googleapis.com/css?family=Pacifico');
</style>
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src={withPrefix('/assets/vendor/jquery/jquery.min.js')}></script>
  <script src={withPrefix('/assets/vendor/jquery-migrate/jquery-migrate.min.js')}></script>
  <script src={withPrefix('/assets/vendor/popper.min.js')}></script>
  <script src={withPrefix('/assets/vendor/bootstrap/bootstrap.min.js')}></script>

  <script src={withPrefix('/assets/vendor/masonry/dist/masonry.pkgd.min.js')}></script>
  <script src={withPrefix('/assets/vendor/imagesloaded/imagesloaded.js')}></script>


  <script src={withPrefix('/assets/vendor/appear.js')}></script>
  <script src={withPrefix('/assets/vendor/hs-megamenu/src/hs.megamenu.js')}></script>
  <script src={withPrefix('/assets/vendor/dzsparallaxer/dzsparallaxer.js')}></script>
  <script src={withPrefix('/assets/vendor/dzsparallaxer/dzsscroller/scroller.js')}></script>
  <script src={withPrefix('/assets/vendor/dzsparallaxer/advancedscroller/plugin.js')}></script>
  <script src={withPrefix('/assets/vendor/fancybox/jquery.fancybox.min.js')}></script>
  <script src={withPrefix('/assets/vendor/typedjs/typed.min.js')}></script>
  <script src={withPrefix('/assets/vendor/circles/circles.min.js')}></script>

  <script src={withPrefix('/assets/js/hs.core.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.header.js')}></script>
  <script src={withPrefix('/assets/js/helpers/hs.hamburgers.js')}></script>
  <script src={withPrefix('/assets/js/helpers/hs.height-calc.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.tabs.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.popup.js')}></script>
  <script src={withPrefix('/assets/js/components/text-animation/hs.text-slideshow.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.rating.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.onscroll-animation.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.counter.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.chart-pie.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.go-to.js')}></script>
  <script src={withPrefix('/assets/vendor/jquery.countdown.min.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.countdown.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.progress-bar.js')}></script>


<script  src={withPrefix('/assets/vendor/hs-bg-video/hs-bg-video.js')}></script>
<script  src={withPrefix('/assets/vendor/hs-bg-video/vendor/player.min.js')}></script>

<script  src={withPrefix('/assets/js/helpers/hs.bg-video.js')}></script>

<script  src={withPrefix('/assets/vendor/slick-carousel/slick/slick.js')}></script>
<script  src={withPrefix('/assets/js/components/hs.carousel.js')}></script>
<script  src={withPrefix('/assets/clipboard.min.js')}></script>


  <script src={withPrefix('/assets/vendor/custombox/custombox.min.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.modal-window.js')}></script>


<script
  dangerouslySetInnerHTML={{
    __html: `
    $(document).on('ready', function () {
      // initialization of masonry
      $('.masonry-grid').imagesLoaded().then(function () {
        $('.masonry-grid').masonry({
          columnWidth: '.masonry-grid-sizer',
          itemSelector: '.masonry-grid-item',
          percentPosition: true
        });
      });

      // initialization of popups
      $.HSCore.components.HSPopup.init('.js-fancybox', {
        transitionEffect: false
      });
    });

       

    $(document).on('ready', function () {
      // initialization of autonomous popups
      $.HSCore.components.HSModalWindow.init('.js-autonomous-popup', {
        autonomous: true
      });
    });


    
    $(document).on('ready', function () {

  
      // initialization of carousel
      $.HSCore.components.HSCarousel.init('.js-carousel');

      // initialization of CopyToClipboardButton
      new ClipboardJS('.btn');

      // initialization of popovers
      $('[data-toggle="popover"]').popover();

      
      // initialization of tabs
      $.HSCore.components.HSTabs.init('[role="tablist"]');

      // initialization of popups
      $.HSCore.components.HSPopup.init('.js-fancybox');

      // initialization of go to
      $.HSCore.components.HSGoTo.init('.js-go-to');
    });

   $(document).on('ready', function () {


    // initialization of tabs
    $.HSCore.components.HSTabs.init('[role="tablist"]');

    // initialization of header height offset
    $.HSCore.helpers.HSHeightCalc.init();

    // initialization of scroll animation
    $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

    // initialization of counters
    var counters = $.HSCore.components.HSCounter.init('[class*="js-counter"]');

    // initialization of chart pies with rtl option
    var rtlItems = $.HSCore.components.HSChartPie.init('.js-pie-rtl', {
      rtl: true
    });

    // initialization of rating
    $.HSCore.components.HSRating.init($('.js-rating'), {
      spacing: 4
    });

    // initialization of popups with media
    $.HSCore.components.HSPopup.init('.js-fancybox-media', {
      helpers: {
        media: {},
        overlay: {
          css: {
            'background': 'rgba(255, 255, 255, .8)'
          }
        }
      }
    });

    // initialization of text animation (typing)
    $(".u-text-animation.u-text-animation--typing").typed({
      strings: [
        "awesome template",
        "perfect template",
        "just like a boss"
      ],
      typeSpeed: 60,
      loop: true,
      backDelay: 1500
    });

    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');
  });

  $(window).on('load', function () {
    // initialization of header
    $.HSCore.components.HSHeader.init($('#js-header'));
    $.HSCore.helpers.HSHamburgers.init('.hamburger');

    // initialization of HSMegaMenu component
    $('.js-mega-menu').HSMegaMenu({
      event: 'hover',
      pageContainer: $('.container'),
      breakpoint: 991
    });
  });

  $(window).on('resize', function () {
    setTimeout(function () {
      $.HSCore.components.HSTabs.init('[role="tablist"]');
    }, 200);
  });

        `,
  }}
/>

        </body>
      </html>
    )
  }
}