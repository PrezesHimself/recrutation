import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Routes from './routes/routes';

  // var socket = io('http://localhost');
  // socket.on('connect', function(){});
  // socket.on('event', function(data){});
  // socket.on('disconnect', function(){});

  // console.log(socket);

angular.module('app', [
    uiRouter,
    Routes.name,
])
.config(($urlRouterProvider, $stateProvider, $locationProvider) => {

    $stateProvider.state('app', {
        abstract: true,
        url: '/',
        template: '<ui-view/>'
    });

    // $locationProvider.html5Mode(true);
})

.run(() => {
    console.log('running angular ' + angular.version.full);
})

