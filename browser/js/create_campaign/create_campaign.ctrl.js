app.controller('CreateCampaignCtrl', function($scope , $state, CampaignFactory,Session,AuthService,AUTH_EVENTS, $stateParams){

    //CampaignFactory.createCampaign($stateParams);
    $scope.master ={};

    $scope.submit =function(campaign){

        campaign.owner_id = Session.user._id;
        CampaignFactory.createCampaign(campaign).then(function(data){
            $state.go('detail',{id: data._id});
        });
        $scope.master = angular.copy(campaign);


    };

});
