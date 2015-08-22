app.config(function ($stateProvider){

    $stateProvider.state('user_account', {
        url: '/user_account',
        controller: 'userCtrl',
        templateUrl: 'js/user_account/user_account.html',
        resolve: {
            UserBids: function (Session, $http){
              //console.log(Session.user)
              return $http.get('/api/bids/user/' + Session.user._id).then( function (userBids){
                  //console.log(userBids.data);
                  return userBids.data;
                });
	        },
            thisUser: function (Session, $http){
                return $http.get('/api/members/' + Session.user._id).then(function(user){
                    console.log(user);
                    return user.data
                })
            }
        }

    });
});

app.controller('userCtrl', function($scope, Session, UserBids, thisUser){
    $scope.user = thisUser;
    $scope.bids = UserBids;
})
