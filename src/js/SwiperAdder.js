/** Aggregator function for swipers
 * @method addSwiper() - add swiper to the wrapper;
 * @param {string} swiperSelector - query selector for the swiper element;
 * @param {string} breakResolution - media selector for the breakpoint;
 * @param {Object} swiperOptions - swiper options in form of the object;
 * @method init() - initialize aggregator;
 */

class Swips {
  // Swiper storage
  swipers = new Map();

  /** Initialize all swipers */
  init() {
    // Iterate over all added swipers
    this.swipers.forEach((swipersMap, breakpointStr) => {
      // If swiper category has a breakpoint...
      if (breakpointStr !== "") {
        // Create a breakpoint
        const match = window.matchMedia(`(${breakpointStr})`);
        // Initiate from the start
        this.swiperActivate(match, swipersMap);
        // Add listener to breakpoint
        match.addListener(() => {
          this.swiperActivate(match, swipersMap);
        });
      }
      // If swiper category doesn't have breakpoint
      else {
        // Iterate over all swipers w/o breakpoint and build them
        swipersMap.forEach((obj) => {
          obj.swiper = this.buildSwiper(obj.selector, obj.options);
        });
      }
    });
  }

  /** Function to handle swipers on different screen sizes */
  swiperActivate(match, breakpointMap) {
    // When category listener fires
    if (match.matches) {
      // iterate over all swipers from this category
      breakpointMap.forEach((obj) => {
        // if there is swiper there
        if (obj.swiper !== null) {
          // destroy it
          obj.swiper.destroy(true, true);
        }
      });
    } else {
      breakpointMap.forEach((obj) => {
        obj.swiper = this.buildSwiper(obj.selector, obj.options);
      });
    }
  }

  /** Setup swiper based on options */
  buildSwiper(swiperSelector, swiperOptions) {
    // result variable
    let res = false;
    // try to create swiper with passed arguments
    try {
      res = new Swiper(swiperSelector, swiperOptions);
    } catch (err) {
      // log error if try failed
      console.log(`Swips::buildSwiper - Error, instance is not created!`);
    }
    // return swiper
    return res;
  }

  /** Add swiper with following parameters */
  addSwiper(swiperSelector, breakResolution, swiperOptions) {
    // Check if swiper selectable on this page
    if (document.querySelector(swiperSelector)) {
      // Check if breakpoint category exists
      if (this.swipers.has(breakResolution)) {
        // breakpoint category
        const category = this.swipers.get(breakResolution);
        // position of the new swiper
        const size = category.size;
        // add swiper slot (with options) to that breakpoint category
        category.set(size, {
          selector: swiperSelector,
          options: swiperOptions,
          swiper: null,
        });
      }
      // if it does not -> create a new one
      else {
        // Create category with this swiper
        this.swipers.set(breakResolution, new Map());
        // initialize first swiper slot (with options)
        this.swipers.get(breakResolution).set(0, {
          selector: swiperSelector,
          options: swiperOptions,
          swiper: null,
        });
      }
    }
    return this.swipers;
  }
}
