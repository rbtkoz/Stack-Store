'use strict'
describe('LoginCtrl', function(){
    var scope;
    beforeEach(module('FullstackGeneratedApp'))
    beforeEach(inject(function(_$rootScope_, $controller) {
        scope = _$rootScope_
        $controller('LoginCtrl', {$scope: scope});
    }));
    it('Should start with an empty login object', function(){
        expect(scope.login).to.be.empty;
        expect(scope.error).to.equal(null);

    })

});
