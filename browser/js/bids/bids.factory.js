app.factory('bidsFactory', function($http){
    return {
        set: function(bid, campaign_id, user_id) {
            return $http.post('/api/bids', {
                bidPrice: bid.value,
                campaign_id: campaign_id,
                user_id: user_id
            })
        }
    }
});
