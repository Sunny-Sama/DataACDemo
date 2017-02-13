/**
 * Created by Sunny on 2017/1/15.
 */
var myApp = angular.module('myApp', ['ui.router', 'myApp.controllers', 'accessManage.controllers']);
myApp.config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.when('','/main');
  $stateProvider
      .state('main', {
          url: '/main',
          cache: 'false',
          templateUrl: 'templates/main.html',
          controller: 'mainCtrl'
      })

      .state('accessManage', {
          url: '/accessManage/:dataId',
          abstract: true,
          templateUrl: 'templates/access-manage.html'
      })

      .state('accessManage.userAC', {
          url: '',
          cache: 'false',
          templateUrl: 'templates/user-ac.html',
          controller: 'userACCtrl'
      })

      .state('accessManage.attributeAC', {
          url: '/attributeAC',
          cache: 'false',
          templateUrl: 'templates/attribute-ac.html',
          controller: 'attributeACCtrl'
      })

      .state('addWhite', {
          url: '/addWhite',
          templateUrl: 'templates/add-white-user.html',
          controller: 'addWhiteCtrl'
      })

      .state('addBlack', {
          url: '/addBlack',
          templateUrl: 'templates/add-black-user.html',
          controller: 'addBlackCtrl'
      })

      .state('addAttr', {
          url: '/addAttr',
          templateUrl: 'templates/add-attr.html',
          controller: 'addAttrCtrl'
      })
}]);
