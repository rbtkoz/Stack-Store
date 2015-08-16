app.controller('CampaignCtrl',function($scope, CampaignFactory, $interval, $stateParams){
    var timer;
    CampaignFactory.getAllCampaigns($stateParams.id).then(function (data) {
    	//console.log(data)
        $scope.products = data;

        //CampaignFactory.startTimer(data.expDate);
        $scope.primaryPic = data.imgUrl[0];
	    $scope.changePic=function(i){
	    	$scope.primaryPic=data.imgUrl[i];
	    }
        $scope.startTimer=CampaignFactory.startTimer;
	    timer=$interval(CampaignFactory.startTimer(data.expDate),1000);
    });

    $scope.$on('$destroy', function() {
      $interval.cancel(timer);
    });


});