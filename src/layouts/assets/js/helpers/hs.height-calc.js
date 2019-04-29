/**
 * Calc Height wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';
  $.HSCore.components.HSCalcHeight = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {},

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Calc Height wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {
      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initCalcHeight();

      return this.pageCollection;
    },

    initCalcHeight: function () {
      //Variables
      var $self = this,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          $target = $this.data('calc-target'),
          targetType = $this.data('target-type');

        // Actions
        $self.switchRes(el, $target, targetType);

        $(window).on('resize', function () {
          $self.switchRes(el, $target, targetType);
        });

        collection = collection.add($this);
      });
    },

    switchRes: function (el, target, type) {
      // Variables
      var $self = $(el),
        resolutions = JSON.parse(el.getAttribute('data-responsive')),
        windW = window.innerWidth,
        mainRes = 0,
        mainState;

      $(resolutions).each(function () {
        // Variables
        var $this = this,
          res = $this[0],
          state = $this[1];

        if(windW >= res && res > mainRes) {
          mainRes = res;
          mainState = state;
        }
      });

      // Actions
      if (windW >= mainRes && mainState) {
        console.log(type);

        $self.css({
          'height': 'calc(100vh - ' + $(target).outerHeight() + 'px)',
          'margin-top': type == 'absolute' ? $(target).outerHeight() + 'px' : 0
        });
      } else {
        $self.css({
          'height': '',
          'margin-top': ''
        });
      }
    }
  };
})(jQuery);
