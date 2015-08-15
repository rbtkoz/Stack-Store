app.factory('CampaignFactory',function($http){


	function getAllCampaigns(id){
		//console.log('factory',id);
		if(id){
			return $http.get('/api/campaigns/'+id).then(function(response){
				//console.log(response);
				return response.data;
			})
		}
		return $http.get('/api/campaigns').then(function(response){
			//console.log(response);
			return response.data;
		})
	};


    function createCampaign(campaign){

        console.log(campaign, "front end request received");
        return $http.post('/api/campaigns/new', campaign).then(function(response){
            console.log(response, "success from backend");
            return response.data;

        })
    };



	return {
		getAllCampaigns : getAllCampaigns,
        createCampaign : createCampaign
	}
})
