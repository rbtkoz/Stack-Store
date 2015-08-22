app.factory('CampaignFactory',function($http, $interval, $q, Upload) {
    this.currentCampaignId = null;
    function assignCampaignId(id){
        this.currentCampaignId = id;
    }
    function getCampaignId(){
        return this.currentCampaignId;
    }

    function getAllCampaigns(id) {
        //console.log('factory',id);
        if (id) {
            this.currentCampaignId = id;
            return $http.get('/api/campaigns/' + id).then(function (response) {
                //console.log(response);
                return response.data;
            })
        }
        return $http.get('/api/campaigns').then(function (response) {
            //console.log(response);
            return response.data;
        })
    };

    function uploadImg(file) {
        return Upload.upload({
            url: '/api/upload/image',
            file: file
        });
    };

    function createCampaign(campaign) {
        console.log(campaign, "campaign!!!!!!!!!!!");
        return $http.post('/api/campaigns/new', campaign).then(function (response) {
            return response.data;
        })
    };


	function startTimer(exp) {
		//expect expDate = [year,month,day];
		var current = new Date();
		//month is 0-11, day+1 to indicate stop at midnight;
		//var exp = new Date(expDate[0],expDate[1]-1,expDate[2]+1);
		var timer = parseInt((exp.getTime()-current.getTime())/1000,10),
		days,
		hours,
		minutes,
		seconds;
		if(timer<=0){
			//document.querySelector('#countdown').textContent= "Deal expired.";
			return "Deal expired.";
		}
		//$interval(function() {
	    	days=parseInt(timer/3600/24,10);
	    	hours=parseInt(timer/3600 % 24, 10);
	        minutes= parseInt((timer - days*24*3600 -hours*3600)/ 60, 10);
	        seconds = parseInt(timer % 60, 10);

	        var dd = days+" day" + (days >1 ? 's ': ' '),
	        hh = hours+" hour" + (hours >1 ? 's ': ' '),
	        m = minutes+" minute" + (minutes >1  ? 's ' : ' '),
	        s = seconds+" second" + (seconds >1  ? 's': '');

	        //document.querySelector('#countdown').textContent= "Deal ends in "+ dd+hh+m+s;
	        return  "Deal ends in "+ dd+hh+m+s;
	    //}, 1000);
	};

	return {
			getAllCampaigns : getAllCampaigns,
            createCampaign: createCampaign,
			startTimer: startTimer,
            uploadImg: uploadImg
			}
})
