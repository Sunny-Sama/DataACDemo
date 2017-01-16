/**
 * Created by Sunny on 2017/1/15.
 */
angular.module('myApp.controllers', [])

.controller('mainCtrl', function($rootScope, $scope, $http){
    $rootScope.hostUrl = 'localhost';
    var getDataList = function () {
        $http.get('http://' + $rootScope.hostUrl + '8080/DataACServer/getDataList')
            .success(function(ret){
                if(ret != null && ret[0] != null) {
                    $rootScope.dataList = ret;
                }
                else {
                    $rootScope.dataList = null;
                }
            })
            .error(function(){
                alert('http error');
            });
    }

    $rootScope.dataList = [
        {
            dataId: '1',
            dataName: 'data1',
            dataSecretLvl: 1
        },
        {
            dataId: '2',
            dataName: 'data2',
            dataSecretLvl: 3
        },
        {
            dataId: '3',
            dataName: 'data3',
            dataSecretLvl: 5
        },
        {
            dataId: '4',
            dataName: 'data4',
            dataSecretLvl: 2
        }];

});

angular.module('accessManage.controllers', [])

.controller('userACCtrl', function($rootScope, $scope, $stateParams){
    $rootScope.currentId = $stateParams.dataId;

})

.controller('attributeAC', function(){

});
