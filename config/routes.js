/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },
  'POST /features/': 'FeaturesController/features',
  'GET /features/': 'FeaturesController/getFeatures',

  'POST /user/': 'UserController/User',
  'GET /user/': 'UserController/getUser',

  'POST /booking/': 'BookingController/Booking',
  'POST /booking/update/:id': 'BookingController/BookingUpdate',

  'GET /booking/hotel/search': 'BookingController/BookingByKeyword',
  'GET /booking/hotel/check_in/:check_in': 'BookingController/BookingByDate',
  'GET /booking/hotel/status/:status': 'BookingController/BookingByStatus',

  'GET /user/id/:id': 'UserController/UserByID',

  'POST /footers/about': 'FootersController/footersAbout',
  'POST /footers/sosmed': 'FootersController/footersSosmed',

  'GET /footers/about': 'FootersController/getFootersAbout',
  'GET /footers/sosmed': 'FootersController/getFootersSosmed',

  'POST /facility': 'HotelController/addFacility',
  'POST /hotel': 'HotelController/addHotel',
  'POST /hotel/photos': 'HotelController/addHotelPhotos',
  'POST /hotel/room': 'HotelController/addHotelRoom',
  'POST /hotel/facility': 'HotelController/addHotelFacility',

  'GET /hotel/': 'HotelController/list',
  'GET /hotel/:id': 'HotelController/listById',

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};
