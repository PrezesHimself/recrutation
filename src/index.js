import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Routes from './routes/routes';

var io = require('socket.io')();
io.on('connection', function(socket){});
io.listen(3000);

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

    //$locationProvider.html5Mode(true);
})

.run(() => {
    console.log('running angular ' + angular.version.full);
})

.factory('mySocket', function (socketFactory) {
    return socketFactory();
});

