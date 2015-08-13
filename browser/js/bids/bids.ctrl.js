app.controller('bidsCtrl', function($scope, AuthService, Session, bidsFactory){
    $scope.submitBid = function(bid, campaign_id) {
        if(AuthService.isAuthenticated()) {
            bidsFactory.set(bid, campaign_id, Session.user._id)
                .then(function(response){
                    console.log(response)
                });
        } else {
            AuthService.notLoggedIn();
        }
    }
});
