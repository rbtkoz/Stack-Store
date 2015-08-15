app.controller('CampaignCtrl',function($scope, CampaignFactory, $stateParams){
    CampaignFactory.getAllCampaigns($stateParams.id).then(function (data) {
    	//console.log(data)
        $scope.products = data;
        $scope.primaryPic = data.imgUrl[0];
        $scope.changePic=function(i){
        	$scope.primaryPic=data.imgUrl[i];
        }
    });
});