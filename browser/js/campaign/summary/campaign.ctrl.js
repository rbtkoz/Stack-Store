app.controller('CampaignCtrl',function($scope, CampaignFactory, $stateParams){
    CampaignFactory.getAllCampaigns($stateParams.id).then(function (data) {
    	//console.log(data)
        $scope.products = data;
    });
});