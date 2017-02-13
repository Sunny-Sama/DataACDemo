/**
 * Created by Sunny on 2017/2/13.
 */
angular.module('accessManage.controllers', [])

    .controller('userACCtrl', function($rootScope, $scope, $http, $stateParams){
        $rootScope.currentId = $stateParams.dataId;
        $scope.whiteList = [
            {
                userName: 'user1', //可以是用户名也可以是用户id
                state: '1' //强制1
            },
            {
                userName: 'user2',
                state: '1'
            },
            {
                userName: 'user3',
                state: '0'
            },
            {
                userName: 'user4',
                state: '1'
            }
        ];

        var getWhiteList = function(){
            $http.get('http://' + $rootScope.hostUrl + '8080/DataACServer/getWhiteList', {param:{dataId: $rootScope.currentId}})
                .success(function(ret){
                    if(ret != null && ret[0] != null) {
                        $scope.whiteList = ret;
                    }
                    else {
                        $scope.whiteList = null;
                    }
                })
                .error(function(){
                    alert('http error: 不能获取白名单');
                });
        }

        $scope.searchWhite = function () {
            //TODO
        }

        $scope.addWhite = function () {
            //TODO
        }

        $scope.changeState = function () {
            //TODO
        }

        $scope.deleteWhite = function(){
            //TODO
        }

        $scope.blackList = [
            {
                userName: 'user5',
            },
            {
                userName: 'user6',
            },
            {
                userName: 'user7',
            },
        ];

        var getBlackList = function(){
            $http.get('http://' + $rootScope.hostUrl + '8080/DataACServer/getBlackList', {param:{dataId: $rootScope.currentId}})
                .success(function(ret){
                    if(ret != null && ret[0] != null) {
                        $scope.blackList = ret;
                    }
                    else {
                        $scope.blackList = null;
                    }
                })
                .error(function(){
                    alert('http error: 不能获取黑名单');
                });
        }

        $scope.searchBlack = function () {
            //TODO
        }

        $scope.addBlack = function () {
            //TODO
        }

        $scope.deleteBlack = function(){
            //TODO
        }
    })

    .controller('attributeACCtrl', function($scope, $rootScope, $http){

        $scope.attrList = [
            {
                userRole: 0,
                startTime: '00:00',
                endTime: '23:59',
                state: 1
            },
            {
                userRole: 1,
                startTime: '08:00',
                endTime: '16:00',
                state: 1
            },
            {
                userRole: 1,
                startTime: '16:00',
                endTime: '20:00',
                state: 0
            }
        ];

        var getAttrList = function(){
            $http.get('http://' + $rootScope.hostUrl + '8080/DataACServer/getAttrList', {param:{dataId: $rootScope.currentId}})
                .success(function(ret){
                    if(ret != null && ret[0] != null) {
                        $scope.attrList = ret;
                    }
                    else {
                        $scope.attrList = null;
                    }
                })
                .error(function(){
                    alert('http error: 不能获取属性约束列表');
                });
        }

        $scope.searchAttr = function(){
            //TODO
        }

        $scope.addAttr = function () {
            //TODO
        }

        $scope.deleteAttr = function(){
            //TODO
        }
    })