'use strict';

angular.module('letshelpApp.auth', [
  'letshelpApp.constants',
  'letshelpApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
