angular.module('meanhotel').controller('HotelsController', HotelsController);

function HotelsController(HotelDataFactory){ 
    var vm = this;
    vm.title = 'MEAN Hotel App';
    HotelDataFactory.hotelList().then(function(responseData){
        console.log(responseData);
        vm.hotels = responseData;
    });
}