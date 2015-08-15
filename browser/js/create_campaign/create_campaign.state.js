/**
 * Created by alex.kozovski on 8/15/15.
 */
app.config(function($stateProvider){

    $stateProvider.state('newcampaign', {
        url: '/create',
        templateUrl: '/js/create_campaign/create_campaign.html',
        controller: 'CreateCampaignCtrl'
    })

})

