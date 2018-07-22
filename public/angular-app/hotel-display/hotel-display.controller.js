angular.module('meanhotel').controller('HotelController', HotelController);

function HotelController($route, $routeParams, $window, HotelDataFactory, AuthFactory, jwtHelper) {
  var vm = this;
  var id = $routeParams.id;
  vm.isSubmitted = false;
  HotelDataFactory.hotelDisplay(id).then(function(response) {
    vm.hotel = response;
    vm.stars = _getStarRating(response.stars);
  });

  function _getStarRating(stars) {
    return new Array(stars);
  }

  vm.isLoggedIn = function() {
    if (AuthFactory.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  };

  vm.addReview = function() {

    var token = jwtHelper.decodeToken($window.sessionStorage.token);
    var username = token.username;
    
    var postData = {
      name: username,
      rating: vm.rating,
      review: vm.review
    };
    console.log('post review ',postData);
    console.log('with token ',token);
    if (vm.reviewForm.$valid) {
      HotelDataFactory.postReview(id, postData).then(function(response) {
        if (response.status === 200) {
          $route.reload();
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      vm.isSubmitted = true;
    }
  };

}