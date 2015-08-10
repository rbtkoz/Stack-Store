
app.directive('campaign',function(){
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/campaign/campaign.html'
        //controller:'CampaignCtrl'
	}
})

.controller('CampaignCtrl',function($scope, CampaignFactory){
    CampaignFactory.getAllCampaigns().then(function (data) {
        $scope.products = data;
    });
});