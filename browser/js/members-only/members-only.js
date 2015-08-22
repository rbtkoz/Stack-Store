app.config(function ($stateProvider) {

    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: '/js/members-only/admin.html',
        controller: 'adminCtrl'
    });

});


