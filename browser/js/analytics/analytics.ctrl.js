//See: https://github.com/pablojim/highcharts-ng
app.controller('AnalyticsCtrl', function ($scope, CampaignFactory, $stateParams) {

    CampaignFactory.getAllCampaigns($stateParams.id).then(function (prod) {
        $scope.campaign = prod;

        var bids =[]

        for(var i in prod.bids){
            bids.push(prod.bids[i].bidPrice);
        }

        bids.sort(function(a,b){return a-b});
        var bidCount=[], bidPrices=[], i=0,count=1;
        while(i<bids.length){
            var count=1;
            while(bids[i]===bids[i+1]){
                count++;
                i++;
            }
            bidCount.push(count);
            bidPrices.push(bids[i]);
            i++;
        }
        console.log(bidPrices,bidCount);
        $scope.chartConfig = {
            options: {
                chart: {
                    zoomType: 'xy'
                }
            },
            series: [{
                name:'Bids',
                type:'column',
                data: bidCount
            },{
                name:'Bids',
                type:'spline',
                data: bidCount
            }],
            title: {
                text: prod.title
            },
            subtitle: {
                text: 'Total Bids: '+prod.bids.length
            },
            xAxis: {
                categories: bidPrices,
                crosshair: true,
                labels:{
                    format:'${value}'
                }
            },
            yAxis:[{ // Primary yAxis
                labels: {
                    format: '{value} Bids',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Number of Bids',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }],
            loading: false
        }
    });

    $scope.addPoints = function () {
        var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };

    $scope.addSeries = function () {
        var rnd = []
        for (var i = 0; i < 10; i++) {
            rnd.push(Math.floor(Math.random() * 20) + 1)
        }
        $scope.chartConfig.series.push({
            data: rnd
        })
    }
    
    $scope.removeRandomSeries = function () {
        var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray.splice(rndIdx, 1)
    }

    $scope.toggleLoading = function () {
        this.chartConfig.loading = !this.chartConfig.loading
    }



});