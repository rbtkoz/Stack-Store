app.directive('countdown',['$interval', function($interval){
	return {
		restrict:'A',
		link:function(scope,element,attrs){
			var expDate=[2017,4,2],
			countdown;
			//month is 0-11, day+1 to indicate stop at midnight;
			var exp = new Date(expDate[0],expDate[1]-1,expDate[2]+1);
			function Timer() {
				//expect expDate = [year,month,day];
				var current = new Date();			
				//console.log('exp',expDate)
				var timer = parseInt((exp.getTime()-current.getTime())/1000,10),
				days,
				hours,
				minutes,
				seconds;

				if(timer <= 0){
					element.textContent="Deal expired";	
				}

		    	days=parseInt(timer/3600/24,10);
		    	hours=parseInt(timer/3600 % 24, 10);
		        minutes= parseInt((timer - days*24*3600 -hours*3600)/ 60, 10)
		        seconds = parseInt(timer % 60, 10);

		        var dd = days+" day" + (days >1 ? 's ': ' '),
		        hh = hours+" hour" + (hours >1 ? 's ': ' '),
		        m = minutes+" minute" + (minutes >1  ? 's ' : ' '),
		        s = seconds+" second" + (seconds >1  ? 's': '');
		        element.textContent="Deal ends in "+dd+hh+m+s;
			};

		    scope.$watch(attrs.countdown, function() {
		      	Timer();
		    });

		    var countdown=$interval(function(){
				Timer();
			},1000);
			//cancel interval when exit
			element.on('$destroy', function() {
		      $interval.cancel(countdown);
		    });

		}
	}
}]);
