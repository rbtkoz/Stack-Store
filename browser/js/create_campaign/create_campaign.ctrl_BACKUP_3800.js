app.controller('CreateCampaignCtrl', function($scope, $state, Upload, CampaignFactory,Session){

    //debugging
    //$scope.master ={};

    //Getting uploaded img and pushing to factory
    $scope.$watch('file', function (file) {
        if (file) {
            $scope.loading = true;

            CampaignFactory.uploadImg($scope.file).then(function(data){
                //console.log("promise called", data);
                $scope.loading = false;
                $scope.upload = data;
                var initial_path = "https://s3-us-west-2.amazonaws.com/stackstore/";
                //join is necessary if file name has spaces. S3 reformats to + so we do the same
                $scope.campaign.imgUrl = initial_path + data.data.split(' ').join('+');
            });
        }
    });

    //submit new campaign
    $scope.submit =function(campaign){

        campaign.owner_id = Session.user._id;
        CampaignFactory.createCampaign(campaign).then(function(data){
            $state.go('detail',{id: data._id});
        });
        $scope.master = angular.copy(campaign);
<<<<<<< HEAD
        $state.go('allcampaigns');
=======


>>>>>>> 10fe0622d7fe39a9fb566e9e97e00db270fb7071
    };


    $scope.user = Session.user;


});



