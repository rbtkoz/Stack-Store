app.config(function ($stateProvider, Session, $http){

    $stateProvider.state('user_account', {
        url: '/user_account',
        controller: 'userCtrl',
        templateUrl: 'js/user_account/user_account.html'
        // resolve: {
        //   UserBids: function(Session){
        //     console.log(Session.user);
        //       $http.get('/api/bid/user/' & Session.user.id, function(err, bids){
        //         return {bids: bids}
        //       })
        //   }
        //}
    });
});

app.controller('userCtrl', function($scope, Session){
    $scope.user = Session.user;
    //$scope.bids = UserBids.bids;
})
