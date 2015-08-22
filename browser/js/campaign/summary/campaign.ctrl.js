app.controller('CampaignCtrl',function($scope, AuthService,CampaignFactory, $interval, $stateParams){
    var timer;
    CampaignFactory.getAllCampaigns($stateParams.id).then(function (data) {
    	//console.log(data)
        $scope.products = data;
        $scope.login=AuthService.isAuthenticated();

        //CampaignFactory.startTimer(data.expDate);

            $scope.primaryPic = data.imgUrl[0];
            $scope.changePic=function(i){
                $scope.primaryPic=data.imgUrl[i];
            }

        $scope.startTimer=CampaignFactory.startTimer;
        var exp=new Date(data.expDate[0],data.expDate[1]-1,data.expDate[2]+1);

        if(exp<=new Date()){
            $scope.active=false;
        }else{
            $scope.active=true;
        }
        $scope.countdown = 'Loading...';

	    timer=$interval(function(){
            $scope.countdown = CampaignFactory.startTimer(exp)},1000);
    });

    $scope.$on('$destroy', function() {
      $interval.cancel(timer);
    });


});
