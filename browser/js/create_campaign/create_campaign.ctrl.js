app.controller('CreateCampaignCtrl', function($scope , $state, CampaignFactory,Session,AuthService,AUTH_EVENTS, $stateParams){

    //CampaignFactory.createCampaign($stateParams);
    $scope.master ={};

    $scope.submit =function(campaign){
        CampaignFactory.createCampaign(campaign);
        $scope.master = angular.copy(campaign);
        $state.go('home');
    };

    $scope.user = Session.user;
});
