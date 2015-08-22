app.controller('bidsCtrl', function($scope, AuthService, Session, bidsFactory, $state){
    $scope.submitBid = function(bid, campaign_id) {
        if(AuthService.isAuthenticated()) {
            bidsFactory.set(bid, campaign_id, Session.user._id)
                .then(function(response){
                    alert('Your bid: $'+bid.value+' is submitted.');
                    $scope.bid.value='';
                    console.log(response)
                });
        } else {
            AuthService.notLoggedIn();
        }
    }
});
