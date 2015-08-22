app.config(function ($stateProvider) {
    $stateProvider.state('allcampaigns', {
        url: '/campaigns',
        templateUrl: 'js/campaign/all/allcampaigns.html',
        controller: 'CampaignCtrl'
    });
});
