app.config(function ($stateProvider, AuthService, Session, $http){
    $stateProvider.state('user_account', {
        url: '/user_account',
        controller: userCtrl,
        templateUrl: 'js/user-account/user_account.html',
        resolve: {
          UserBids: function(Session){
              $http.get('api/')
          }
        }
    })
});

app.controller('userCtrl', function($scope, Session){
    $scope.user = Session.user;

})
