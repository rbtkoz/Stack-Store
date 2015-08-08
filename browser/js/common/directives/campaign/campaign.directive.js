

app.directive('campaign',function(){
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/campaign/campaign.html',

        link: function(scope){

            scope.product = {
                title:'cute puppy',
                summaryDescription: "well trained and cute",
                duration: "5",
                imgUrl: "https://pbs.twimg.com/profile_images/378800000674268962/06ce58cab26c3a0daf80cf57e5acb29b_400x400.jpeg"

            }
        }
	}
});
