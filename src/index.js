import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngTouch from 'angular-touch';
import Routes from './routes/routes';
import ngAnimate from 'angular-animate';
console.log(ngAnimate);
import io from 'socket.io-client/socket.io';

angular.module('app', [
    uiRouter,
    Routes.name,
    ngTouch,
    ngAnimate
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

    var myIoSocket = io('http://192.168.0.11:1337');

    var mySocket = socketFactory({
        ioSocket: myIoSocket
    });

    mySocket.forward('message');
    mySocket.forward('greeting');
    return mySocket;
})
