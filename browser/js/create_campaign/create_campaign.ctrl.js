app.controller('CreateCampaignCtrl', function($scope , $state, CampaignFactory,Session,AuthService,AUTH_EVENTS, $stateParams){

    //CampaignFactory.createCampaign($stateParams);
    $scope.master ={};

    $scope.submit =function(campaign){

        campaign.owner_id = Session.user._id;
        CampaignFactory.createCampaign(campaign);
        $scope.master = angular.copy(campaign);

        $state.go('detail',{id: CampaignFactory.currentCampaignId});
    };

});
