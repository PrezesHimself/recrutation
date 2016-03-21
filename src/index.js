import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngTouch from 'angular-touch';
import Routes from './routes/routes';

import io from 'socket.io-client/socket.io';

angular.module('app', [
    uiRouter,
    Routes.name,
    ngTouch
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
    console.log('running angular  ' + angular.version.full);
})

.factory('mySocket', function (socketFactory) {
    console.log('create mySocket');

    var myIoSocket = io('http://localhost:1337');

    var mySocket = socketFactory({
        ioSocket: myIoSocket
    });

    mySocket.forward('message');
    return mySocket;
})