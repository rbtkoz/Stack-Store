app.controller('CampaignCtrl',function($scope, $rootScope,AuthService,CampaignFactory,bidsFactory, $interval, $stateParams){
    var timer;

    $rootScope.$on('updateBids', function(){
        $scope.totalBids++;
    });
    CampaignFactory.getAllCampaigns($stateParams.id).then(function (data) {
    	//console.log(data)
        $scope.products = data;
        $scope.login=AuthService.isAuthenticated();

        $scope.totalBids=data.bids.length;
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
