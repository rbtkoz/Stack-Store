/**
 * Created by mike on 8/22/15.
 */
app.controller('adminCtrl', function(Session, $http, $scope){
    $scope.user = Session.user;
    $scope.search = function(){
        $http.post('/api/admin/searchUser',{name: $scope.searchQry, id: Session.user._id})
            .then(function(users){
                console.log('search results', users);
                $scope.results = users.data;
                $scope.$digest;
            })
    }
    $scope.setAdmin = function(id){
        $http.post('/api/admin/setAdmin', {setId: id, id: Session.user._id}).then(function(user){
            console.log('success',user)
            $scope.$digest;
            return;
        })
    }
})
