import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withPrefix } from "gatsby-link"

import Header from '../components/Header'
import Footer from '../components/Footer'

{/*<!-- CSS Global Compulsory -->*/}
import './assets/vendor/bootstrap/bootstrap.min.css'
{/*<!-- CSS Global Icons -->*/}
import './assets/vendor/icon-awesome/css/font-awesome.min.css'
import './assets/vendor/icon-line/css/simple-line-icons.css'
import './assets/vendor/icon-etlinefont/style.css'
import './assets/vendor/icon-line-pro/style.css'
import './assets/vendor/icon-hs/style.css'
import './assets/vendor/dzsparallaxer/dzsparallaxer.css'
import './assets/vendor/dzsparallaxer/dzsscroller/scroller.css'
import './assets/vendor/dzsparallaxer/advancedscroller/plugin.css'
import './assets/vendor/fancybox/jquery.fancybox.min.css'
import './assets/vendor/typedjs/typed.css'
import './assets/vendor/animate.css'
import './assets/vendor/slick-carousel/slick/slick.css'

import './assets/vendor/hs-megamenu/src/hs.megamenu.css'
import './assets/vendor/hamburgers/hamburgers.min.css'

import './assets/vendor/custombox/custombox.min.css'

{/*<!-- CSS Unify -->*/}
import './assets/css/unify-core.css'
import './assets/css/unify-components.css'
import './assets/css/unify-globals.css'

{/*<!-- CSS Customization -->*/}
import './assets/css/custom.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Киселевы Михаил и Ника"
      meta={[
        { name: 'description', content: 'Киселевы Михаил и Ника' },
        { name: 'keywords', content: 'свадьба, wedding, семья, family, михаил, ника, киселевы' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      ]}
    />
    <main>

    {children()}

    
    </main>
  
  {/*<script src={withPrefix('/assets/vendor/jquery/jquery.min.js')}></script>
  <script src={withPrefix('/assets/vendor/jquery-migrate/jquery-migrate.min.js')}></script>
  <script src={withPrefix('/assets/vendor/popper.min.js')}></script>
  <script src={withPrefix('/assets/vendor/bootstrap/bootstrap.min.js')}></script>

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

    <script src={withPrefix('/assets/js/custom.js')}></script>

<script
  dangerouslySetInnerHTML={{
    __html: `
  
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
/>*/}
    </div>
    
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper