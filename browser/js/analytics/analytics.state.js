app.config(function ($stateProvider) {
    $stateProvider.state('analytics', {
        url: '/analytics/:id',
        templateUrl: 'js/analytics/analytics.html',
        controller:'AnalyticsCtrl'
    });
});