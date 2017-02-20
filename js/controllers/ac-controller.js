/**
 * Created by Sunny on 2017/2/13.
 */
angular.module('accessManage.controllers', [])

    .controller('userACCtrl', function($rootScope, $scope, $http, $stateParams){
        $rootScope.currentId = $stateParams.dataId;
        $scope.whiteList = [
            {
                ruleId: '0',
                userName: 'user1', //可以是用户名也可以是用户id
                state: '1' //强制1
            },
            {
                ruleId: '1',
                userName: 'user2',
                state: '1'
            },
            {
                ruleId: '2',
                userName: 'user3',
                state: '0'
            },
            {
                ruleId: '3',
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
            var searchKey = document.getElementById('whiteKeyValue').value;
            if(searchKey != null && searchKey.length >0){
                while(searchKey.lastIndexOf(' ') >= 0){
                    searchKey = searchKey.replace(' ', '');
                }
                if(searchKey.length == 0)
                    alert('输入内容不能为空');
                else{
                    console.log(searchKey);
                    //TODO：服务器交互
                }
            }
            else {
                alert('输入内容不能为空');
            }

        }

        $scope.addWhite = function () {
            var addKey = document.getElementById('addWhiteKey').value;
            var states = document.getElementsByName('state');
            var state;
            for(var i = 0; i < states.length; i++){
                if(states[i].checked == true)
                    switch(states[i].value){
                        case 'recommend':
                            state = 0;
                            break;
                        case 'force':
                            state = 1;
                            break;
                    }
            }
            if(addKey != null && addKey.length > 0){
                while(addKey.lastIndexOf(' ') >= 0){
                    addKey = addKey.replace(' ', '');
                }
                if(addKey.length == 0)
                    document.getElementById('white-error').innerHTML = '输入内容不能为空';
                else{
                    console.log(addKey);
                    //TODO：服务器交互
                }
            }else{
                document.getElementById('white-error').innerHTML = '输入内容不能为空';
            }
        }

        $scope.changeState = function (ruleId) {
            //TODO
        }

        $scope.deleteWhite = function(ruleId){
            //TODO
        }

        $scope.blackList = [
            {
                ruleId: '6',
                userName: 'user5'
            },
            {
                ruleId: '7',
                userName: 'user6'
            },
            {
                ruleId: '8',
                userName: 'user7'
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
            var searchKey = document.getElementById('whiteKeyValue').value;
            if(searchKey != null && searchKey.length >0){
                while(searchKey.lastIndexOf(' ') >= 0){
                    searchKey = searchKey.replace(' ', '');
                }
                if(searchKey.length == 0)
                    alert('输入内容不能为空');
                else{
                    console.log(searchKey);
                    //TODO：服务器交互
                }
            }
            else {
                alert('输入内容不能为空');
            }
        }

        $scope.addBlack = function () {
            var addKey = document.getElementById('addBlackKey').value;
            if(addKey != null && addKey.length > 0){
                while(addKey.lastIndexOf(' ') >= 0){
                    addKey = addKey.replace(' ', '');
                }
                if(addKey.length == 0)
                    document.getElementById('black-error').innerHTML = '输入内容不能为空';
                else{
                    console.log(addKey);
                    //TODO：服务器交互
                }
            }else{
                document.getElementById('white-error').innerHTML = '输入内容不能为空';
            }
        }

        $scope.deleteBlack = function(ruleId){
            //TODO
        }
    })

    .controller('attributeACCtrl', function($scope, $rootScope, $http){

        $scope.attrList = [
            {
                ruleId: '10',
                userRole: 0,
                startTime: '00:00',
                endTime: '23:59',
                state: 1
            },
            {
                ruleId: '11',
                userRole: 1,
                startTime: '08:00',
                endTime: '16:00',
                state: 1
            },
            {
                ruleId: '12',
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
            var searchKey = document.getElementById('attrKeyValue').value;
            if(searchKey != null && searchKey.length >0){
                while(searchKey.lastIndexOf(' ') >= 0){
                    searchKey = searchKey.replace(' ', '');
                }
                if(searchKey.length == 0)
                    alert('输入内容不能为空');
                else{
                    console.log(searchKey);
                    //TODO：服务器交互
                }
            }
            else {
                alert('输入内容不能为空');
            }
        }

        $scope.addAttr = function () {
            var select = document.getElementById('addAttrRole');
            var index = select.selectedIndex;
            var role;
            switch (select[index].value){
                case 'tenant': role = 1; break;
                case 'administrator' : role = 0; break;
            }

            var startTime = document.getElementsByName('startTime')[0].value;
            var endTime = document.getElementsByName('endTime')[0].value;

            var states = document.getElementsByName('state');
            var state;
            for(var i = 0; i < states.length; i++){
                if(states[i].checked == true)
                    switch(states[i].value){
                        case 'recommend':
                            state = 0;
                            break;
                        case 'force':
                            state = 1;
                            break;
                    }
            }

            var tmp = startTime.split(':');
            var startH = tmp[0] - 0;
            var startM = tmp[1] - 0;

            tmp = endTime.split(':');
            var endH = tmp[0] - 0;
            var endM = tmp[1] - 0;

            if(endH > startH || (endH == startH && endM > startM)){
                //TODO
            }else {
                document.getElementById('attr-error').innerHTML = '请输入合理的时间范围';
            }
        }

        $scope.changeState = function (ruleId) {
            //TODO
        }
        
        $scope.deleteAttr = function(ruleId){
            //TODO
        }
    })