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
        var exp=new Date(data.expDate[0],data.expDate[1]-1,data.expDate[2]+1);

        /*if(exp<=new Date()){

        }*/
	    timer=$interval(function(){
            CampaignFactory.startTimer(exp)},1000);
    });

    $scope.$on('$destroy', function() {
      $interval.cancel(timer);
    });


});