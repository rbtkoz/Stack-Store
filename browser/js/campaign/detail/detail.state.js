app.config(function ($stateProvider) {
    $stateProvider.state('detail', {
        url: '/campaign/:id',
        templateUrl: 'js/campaign/detail/detail.html',
        controller:'CampaignCtrl'
    });
});