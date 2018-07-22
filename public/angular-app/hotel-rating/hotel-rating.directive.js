//angular.module('meanhotel').directive('hotelRating', hotelRating);
//// hotelRating   => <hotel-rating>
//// hotelSuperGreat => <hotel-super-great>
//
//function hotelRating(){
//    return {
//        restrict: 'E', // E = Element , A = Attribute
//        template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star"></span>',
//        //templateUrl: 'file.html',
//        bindToController: true,
//        controller: 'HotelController',
//        controllerAs: 'vm',
//        scope: {
//            stars : '@' // '=' for attributes | '@' for objects or arrays | '&' for functions
//        }
//    }
//}

angular.module('meanhotel').component('hotelRating', {
    bindings: {
        stars : '='
    },
    template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star"></span>',
    controller: 'HotelController',
    controllerAs: 'vm'
});