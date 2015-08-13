app.config(function ($stateProvider){
    $stateProvider.state('user_account', {
        url: '/myaccount',
        controller: userCtrl,
        templateUrl: 'js/user-account/user_account.html'
    })
});

app.controller('userCtrl', function($scope){
    $scope.user = {};
})
