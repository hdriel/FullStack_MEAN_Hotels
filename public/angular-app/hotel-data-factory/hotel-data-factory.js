angular.module('meanhotel').factory('HotelDataFactory', HotelDataFactory);

function HotelDataFactory($http){
    return {
        hotelList: hotelList,
        hotelDisplay: hotelDisplay, 
        postReview: postReview
    }
    
    function postReview(id, review){
        return $http.post('/api/hotels/'+ id + '/reviews/', review).then(completePost).catch(failed);
    }
    
    function hotelList(){
        return $http.get('/api/hotels').then(complete).catch(failed);
    }
    
    function hotelDisplay(id){
        return $http.get('/api/hotels/'+ id).then(complete).catch(failed);
    }
    
    function completePost(response){
        return response;
    }
    
    function complete(response){
        return response.data;
    }
    function failed(error){
        console.log('Error http: ' , error.statusText);
    }
}