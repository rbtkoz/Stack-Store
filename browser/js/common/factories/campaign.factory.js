app.factory('CampaignFactory',function($http){
	function getAllCampaigns(){
		return $http.get('/api/campaigns').then(function(response){
			console.log(response);
			return response.data;
		})
	};

	return {
		getAllCampaigns : getAllCampaigns
	}
})