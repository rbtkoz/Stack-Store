app.config(function ($stateProvider) {
    $stateProvider.state('allcampaigns', {
        url: '/',
        templateUrl: 'js/campaign/all/allcampaigns.html',
        controller: 'CampaignCtrl'
    });
});
