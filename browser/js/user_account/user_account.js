app.config(function ($stateProvider){

    $stateProvider.state('user_account', {
        url: '/user_account',
        controller: 'userCtrl',
        templateUrl: 'js/user_account/user_account.html',
        resolve: {
          UserBids: function (Session, $http){
	          //console.log(Session);
              return $http.get('/api/bids/user/' + Session.user._id).then(function(bids){
                return bids;
              })
	        }
        }

    });
});

app.controller('userCtrl', function($scope, Session, UserBids){
    $scope.test = "yo"
    $scope.user = Session.user;
    $scope.bids = UserBids.bids;
})
